import sys
import os
from PIL import Image

def process_image():
    input_path = "public/fithubro-horizontal-logo.png"
    output_path = "public/fithubro-horizontal-logo-transparent.png"

    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Subtract the faint grid background noise (approx RGB 25)
            threshold = 25
            r_val = max(0, r - threshold)
            g_val = max(0, g - threshold)
            b_val = max(0, b - threshold)
            
            # The alpha is the maximum intensity of the remaining color
            alpha = max(r_val, g_val, b_val)
            
            if alpha > 0:
                # Un-premultiply the RGB values so the colors stay vibrant when transparent
                new_r = min(255, int(r_val * 255 / alpha))
                new_g = min(255, int(g_val * 255 / alpha))
                new_b = min(255, int(b_val * 255 / alpha))
                
                # Apply a slight gamma correction to boost the glow
                alpha = min(255, int(alpha * 1.5))
                
                pixels[x, y] = (new_r, new_g, new_b, alpha)
            else:
                pixels[x, y] = (0, 0, 0, 0)

    img.save(output_path)
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    process_image()
