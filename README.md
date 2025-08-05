# AURINZA - Luxury Skincare Website

## 🌟 Overview

AURINZA is a premium luxury skincare brand website featuring modern design, enhanced user experience, and beautiful animations. The website showcases high-quality skincare products with natural ingredients, focusing on deodorant soaps and skincare sets.

## ✨ Features

### 🎨 Design & UX
- **Modern Luxury Design**: Navy blue and gold color scheme with premium aesthetics
- **Responsive Layout**: Fully responsive design for all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations and JavaScript interactions for enhanced user experience
- **Loading Screen**: Elegant loading animation with brand identity
- **Back to Top Button**: Smooth scroll-to-top functionality
- **Hover Effects**: Interactive hover states for cards, buttons, and images

### 🛍️ Product Showcase
- **Product Grid**: Dynamic product loading with beautiful cards
- **Product Badges**: Special badges for featured products (ประหยัด, ขายดี, แนะนำ, ใหม่)
- **Rating System**: Star ratings with review counts
- **Price Display**: Original and discounted pricing with percentage savings
- **Add to Cart**: Interactive shopping cart functionality

### 🌿 Ingredients Section
- **Natural Ingredients**: Highlighting key ingredients like Guava Leaf Extract, Persimmon Extract
- **Interactive Cards**: Hover effects and animations for ingredient information
- **Visual Presentation**: Beautiful imagery with ingredient benefits

### 📞 Contact & Communication
- **Multiple Contact Methods**: Phone numbers, LINE chat, and address
- **Interactive Buttons**: Direct phone calls and LINE chat integration
- **Social Media Links**: Facebook, Instagram, and LINE social connections

### 🎯 Technical Features
- **Performance Optimized**: Lazy loading, image preloading, and efficient animations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Cross-browser Compatible**: Works on all modern browsers
- **Touch Optimized**: Enhanced touch interactions for mobile devices

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Or serve the files using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 📱 Responsive Design

### Mobile (320px - 767px)
- Optimized touch interactions
- Simplified navigation menu
- Stacked layout for better readability
- Touch-friendly buttons and cards

### Tablet (768px - 1023px)
- Two-column product grid
- Enhanced navigation
- Balanced spacing and typography

### Desktop (1024px+)
- Three-column product grid
- Full navigation menu
- Hover effects and animations
- Premium desktop experience

## 🎨 Design System

### Color Palette
- **Primary Navy**: #0f172a (Deep navy blue)
- **Secondary Navy**: #1e293b (Medium navy)
- **Accent Blue**: #3b82f6 (Bright blue)
- **Gold Accent**: #fbbf24 (Premium gold)
- **Light Gray**: #e2e8f0 (Light gray)
- **Text Colors**: Various shades for hierarchy

### Typography
- **Headings**: Playfair Display (serif) for luxury feel
- **Body Text**: Inter (sans-serif) for readability
- **Responsive Sizing**: Scales appropriately across devices

### Animations
- **Fade In**: Elements appear with smooth fade-in effects
- **Float**: Subtle floating animations for decorative elements
- **Hover Transforms**: Scale and translate effects on interaction
- **Gradient Shifts**: Animated gradient backgrounds
- **Loading States**: Smooth loading transitions

## 🔧 Customization

### Adding Products
Edit the `products` array in `script.js`:
```javascript
{
    id: 7,
    name: "New Product",
    price: "299.-",
    originalPrice: "350.-",
    image: "public/images/new-product.jpg",
    description: "Product description",
    badge: "New",
    rating: 4.8,
    reviews: 45
}
```

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
    --navy-primary: #your-color;
    --navy-gold: #your-gold-color;
    /* ... other colors */
}
```

### Adding Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add JavaScript functionality if needed in `script.js`

## 📊 Performance

### Optimizations
- **Image Optimization**: Compressed images for faster loading
- **CSS Minification**: Optimized CSS for production
- **JavaScript Efficiency**: Debounced scroll events and optimized animations
- **Lazy Loading**: Images load as they come into view
- **Preloading**: Critical resources preloaded for better performance

### Loading Times
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Browser Support

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features
- **CSS Grid**: Modern layout system
- **CSS Custom Properties**: Dynamic theming
- **Intersection Observer**: Performance optimizations
- **ES6+ JavaScript**: Modern JavaScript features

## 📞 Contact Information

### AURINZA Contact Details
- **Phone**: 098 616 4264, 083 889 1741
- **LINE**: @acaurinza
- **Address**: AC AURINZA CO., LTD

### Website Features
- **Direct Phone Calls**: Click to call functionality
- **LINE Chat**: Direct LINE chat integration
- **Social Media**: Facebook, Instagram, LINE links

## 🎯 Key Products

### Featured Products
1. **SET 1 ก้อน** - Persimmon Deodorant Soap (139.-)
2. **Duo Deo Set** - 2-piece set with savings (259.-)
3. **Family Fresh Set** - 4-piece family pack (500.-)
4. **Gentle Glow Set** - Skincare set (500.-)
5. **Bright Detox Set** - Detox skincare (595.-)
6. **Clear Radiance Cleanser** - Facial cleanser (350.-)

### Key Ingredients
- **Guava Leaf Extract**: Antioxidant properties
- **Persimmon Extract**: Natural deodorant
- **Aluminum Chlorohydrate**: Sweat control

## 🔄 Version History

### v2.0 (Current)
- Enhanced animations and interactions
- Improved responsive design
- Better accessibility features
- Performance optimizations
- Modern UX/UI improvements

### v1.0 (Original)
- Basic product showcase
- Simple responsive layout
- Basic contact information

## 📝 License

This project is created for AURINZA brand. All rights reserved.

---

**AURINZA - The Epitome of Timeless Beauty** 🌟 