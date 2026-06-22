#!/usr/bin/env python3
"""
Image compression script for Campus Needs
Compresses PNG images while maintaining visual quality
"""
import os
from PIL import Image
import json

def get_file_size_kb(filepath):
    """Get file size in KB"""
    return os.path.getsize(filepath) / 1024

def compress_png(input_path, output_path, quality=85):
    """
    Compress PNG image
    """
    with Image.open(input_path) as img:
        # Convert RGBA to RGB if needed (for JPG conversion)
        if img.mode == 'RGBA':
            # Create white background
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[3])  # Use alpha channel as mask
            img = rgb_img
        
        # Optimize and save
        img.save(output_path, 'PNG', optimize=True, quality=quality)

def main():
    public_dir = '/app/frontend/public'
    images = [
        'campus-needs-logo.png',
        'favicon-32x32.png',
        'favicon-192x192.png',
        'og-image.png'
    ]
    
    results = {
        'before': {},
        'after': {},
        'savings': {}
    }
    
    print("=" * 60)
    print("Campus Needs Image Compression Report")
    print("=" * 60)
    print()
    
    total_before = 0
    total_after = 0
    
    for img_name in images:
        img_path = os.path.join(public_dir, img_name)
        
        if not os.path.exists(img_path):
            print(f"⚠️  {img_name} not found, skipping...")
            continue
        
        # Get original size
        before_size = get_file_size_kb(img_path)
        total_before += before_size
        results['before'][img_name] = f"{before_size:.2f} KB"
        
        # Create backup
        backup_path = img_path + '.backup'
        os.rename(img_path, backup_path)
        
        try:
            # Compress
            compress_png(backup_path, img_path, quality=85)
            
            # Get compressed size
            after_size = get_file_size_kb(img_path)
            total_after += after_size
            results['after'][img_name] = f"{after_size:.2f} KB"
            
            # Calculate savings
            savings_percent = ((before_size - after_size) / before_size) * 100
            results['savings'][img_name] = f"{savings_percent:.1f}%"
            
            print(f"✓ {img_name}")
            print(f"  Before: {before_size:.2f} KB")
            print(f"  After:  {after_size:.2f} KB")
            print(f"  Saved:  {before_size - after_size:.2f} KB ({savings_percent:.1f}%)")
            print()
            
            # Remove backup if successful
            os.remove(backup_path)
            
        except Exception as e:
            print(f"✗ Error compressing {img_name}: {e}")
            # Restore backup on error
            if os.path.exists(backup_path):
                os.rename(backup_path, img_path)
    
    print("=" * 60)
    print(f"Total Before: {total_before:.2f} KB")
    print(f"Total After:  {total_after:.2f} KB")
    print(f"Total Saved:  {total_before - total_after:.2f} KB ({((total_before - total_after) / total_before * 100):.1f}%)")
    print("=" * 60)
    
    # Save JSON report
    with open('/app/image_compression_report.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print("\n✓ Report saved to /app/image_compression_report.json")

if __name__ == '__main__':
    main()
