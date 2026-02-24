from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


def get_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for name in ("arial.ttf", "segoeui.ttf", "calibri.ttf"):
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_og_image(path: Path, subtitle: str) -> None:
    img = Image.new("RGB", (1200, 630), (30, 58, 138))
    draw = ImageDraw.Draw(img)

    for y in range(630):
        r = 24 + (y * 12 // 630)
        g = 46 + (y * 20 // 630)
        b = 110 + (y * 45 // 630)
        draw.line([(0, y), (1200, y)], fill=(r, g, b))

    draw.ellipse((760, -120, 1280, 380), fill=(217, 119, 6))
    draw.ellipse((-180, 320, 420, 920), fill=(34, 197, 94))
    draw.rounded_rectangle((80, 80, 1120, 550), radius=24, outline=(255, 255, 255), width=3)

    title_font = get_font(72)
    subtitle_font = get_font(46)
    meta_font = get_font(28)

    draw.text((120, 170), "Aushnara College", fill=(255, 255, 255), font=title_font)
    draw.text((120, 280), subtitle, fill=(253, 224, 71), font=subtitle_font)
    draw.text((120, 470), "aushnaracollege.edu.bd", fill=(219, 234, 254), font=meta_font)
    draw.text((120, 510), "Established 2001", fill=(191, 219, 254), font=meta_font)

    img.save(path, format="JPEG", quality=90, optimize=True)


def draw_logo(path: Path) -> None:
    logo = Image.new("RGB", (512, 512), (30, 58, 138))
    draw = ImageDraw.Draw(logo)

    draw.ellipse((40, 40, 472, 472), fill=(217, 119, 6))
    draw.rounded_rectangle((120, 160, 392, 392), radius=28, fill=(255, 255, 255))
    draw.polygon([(256, 120), (338, 170), (174, 170)], fill=(255, 255, 255))
    draw.text((170, 252), "AC", fill=(30, 58, 138), font=get_font(48))

    logo.save(path, format="PNG", optimize=True)


def main() -> None:
    out_dir = Path("public")
    out_dir.mkdir(exist_ok=True)

    assets = [
        ("og-image.jpg", "Home"),
        ("og-about.jpg", "About"),
        ("og-programs.jpg", "Programs"),
        ("og-admissions.jpg", "Admissions"),
        ("og-contact.jpg", "Contact"),
        ("og-diploma.jpg", "Diploma Programs"),
        ("og-undergraduate.jpg", "Undergraduate Programs"),
        ("og-scholarships.jpg", "Scholarships"),
    ]

    for filename, subtitle in assets:
        draw_og_image(out_dir / filename, subtitle)

    draw_logo(out_dir / "logo.png")


if __name__ == "__main__":
    main()

