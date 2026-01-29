# 👀 How to Preview the Container Loading Calculator

This guide provides detailed instructions for previewing the Container Loading Calculator application.

## Quick Preview (2 Minutes)

The fastest way to see the app in action:

```bash
# Step 1: Install dependencies (first time only)
npm install

# Step 2: Start development server
npm run dev

# Step 3: Open http://localhost:3000 in your browser
```

That's it! The app should now be running in your browser.

## Preview Methods

### Method 1: Development Server (Recommended)

**Best for:** Development, testing, and quick previews with hot-reload

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
```

**Access at:** `http://localhost:3000`

**Features:**
- ⚡ Instant hot-reload on file changes
- 🔍 Detailed error messages
- 🛠️ Source maps for debugging

---

### Method 2: Production Preview

**Best for:** Testing the production build before deployment

```bash
npm install          # Install dependencies
npm run build        # Build for production
npm run preview      # Start preview server
```

**Access at:** `http://localhost:4173`

**Features:**
- 📦 Optimized and minified code
- 🚀 Production-like performance
- ✅ Final validation before deployment

---

## What You'll See

When the app loads, you'll see this interface:

![App Preview](https://github.com/user-attachments/assets/42092474-6953-458e-8983-2192ea9bb8f5)

### Main Components:

1. **Container Type Selector** (Top Left)
   - Select from 4 standard container sizes
   - See dimensions and max weight

2. **Loading Summary** (Middle Left)
   - Real-time CBM calculations
   - Utilization percentage
   - Weight tracking

3. **Add Product Form** (Bottom Left)
   - Enter product details
   - Auto Fill Max button for quick calculations
   - Add Product button

4. **3D Container View** (Right Side)
   - Interactive 3D visualization
   - Drag to rotate, scroll to zoom
   - See products inside container

5. **Products List** (Bottom)
   - View all added products
   - Remove products as needed

---

## Try These Features

Once the app is running, try:

### 1. Add a Product
```
Product Name: Box A
Length: 100 cm
Width: 80 cm
Height: 60 cm
Weight: 25 kg
Quantity: 10
```
Click "Add Product" and watch the CBM calculations update!

### 2. Use Auto Fill
1. Enter product dimensions (L, W, H)
2. Click "Auto Fill Max"
3. See the maximum quantity calculated automatically

### 3. Change Container Type
- Switch from "20ft Standard" to "40ft High Cube"
- Watch the calculations and 3D view update instantly

### 4. Interact with 3D View
- **Drag** with mouse to rotate the container
- **Scroll** to zoom in/out
- See products rendered inside the container

---

## Browser Requirements

The app works best on modern browsers with WebGL support:

✅ **Supported Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Note:** The 3D visualization requires WebGL. Ensure hardware acceleration is enabled in your browser settings.

---

## Troubleshooting

### "Port already in use" Error

If port 3000 or 4173 is already in use:

**Option 1:** Vite will automatically try the next available port
- Check terminal output for the actual port: `http://localhost:XXXX`

**Option 2:** Stop the other service using that port
```bash
# On Linux/Mac
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Option 3:** Specify a different port
```bash
npm run dev -- --port 3001
```

### Build Errors

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear cache and rebuild
npm run build
```

### 3D View is Blank

If the 3D container view doesn't load:

1. **Check browser console** (F12) for errors
2. **Enable hardware acceleration:**
   - Chrome: Settings → System → Use hardware acceleration
   - Firefox: about:preferences → Performance → Use hardware acceleration
3. **Try a different browser**
4. **Check WebGL support:** Visit https://get.webgl.org/

### App Not Loading

1. **Check terminal output** for errors
2. **Ensure all dependencies installed:** `npm install`
3. **Clear browser cache** and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
4. **Check firewall settings** - allow localhost connections

---

## Network Preview (Share with Others)

To share the preview with others on your network:

```bash
# Development server
npm run dev -- --host

# Production preview
npm run preview -- --host
```

Then share the Network URL shown in terminal (e.g., `http://192.168.1.100:3000`)

---

## Next Steps

After previewing:

- 📖 Read the full [README.md](README.md) for detailed documentation
- 🧪 Try adding different products and container types
- 🎨 Explore the 3D visualization features
- 🔧 Customize the app for your needs

---

## Need Help?

- 📚 Check the [README.md](README.md) for more information
- 🐛 Report issues on [GitHub Issues](https://github.com/ione2025/container-loading-calculator/issues)
- 💬 Ask questions in the repository discussions

---

Enjoy exploring the Container Loading Calculator! 🚢📦
