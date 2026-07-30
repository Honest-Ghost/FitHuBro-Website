from PIL import Image

def create_light_mode_logo():
    input_path = "public/fithubro-horizontal-logo-transparent.png"
    output_path = "public/fithubro-horizontal-logo-light.png"

    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue

            # Check if pixel is part of white/light gray text (R, G, B are close and relatively bright)
            # Red text has high R and significantly lower G and B.
            is_white_or_light = (min(r, g, b) > 100) and (max(r, g, b) - min(r, g, b) < 60)

            if is_white_or_light:
                # Turn white/light text pixels to dark gray/black (#0F172A) while keeping alpha
                dark_val = int(240 - max(r, g, b) * 0.85)
                dark_val = max(15, min(50, dark_val))
                pixels[x, y] = (dark_val, dark_val, dark_val + 5, a)

    img.save(output_path)
    print(f"Created light mode transparent logo at {output_path}")

if __name__ == "__main__":
    create_light_mode_logo()
