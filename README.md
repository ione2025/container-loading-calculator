# Container Loading Calculator

A modern web application for calculating and visualizing container loading capacity with real-time CBM (Cubic Meter) calculations and interactive 3D visualization.

## 🚀 Quick Start - Preview the App

Want to see the app in action? Follow these simple steps:

### Option 1: Run Development Server (Recommended for Development)
```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser and visit:
#    👉 http://localhost:3000
```

### Option 2: Preview Production Build
```bash
# 1. Install dependencies (first time only)
npm install

# 2. Build the application
npm run build

# 3. Preview the production build
npm run preview

# 4. Open your browser and visit:
#    👉 http://localhost:4173 (default Vite preview port)
```

📘 **For detailed preview instructions, troubleshooting, and tips, see [PREVIEW.md](PREVIEW.md)**

### 🎥 What to Expect

Once the app loads, you'll see:
- 🏗️ **Container Selector** - Choose from 4 standard container sizes
- 📝 **Product Form** - Add products with dimensions, weight, and quantity
- 📊 **Real-time CBM Summary** - See used/available space instantly
- 🎨 **3D Visualization** - Interactive container view with your products
- 🤖 **Auto Fill** - Calculate max quantity with one click

![Container Loading Calculator Preview](https://github.com/user-attachments/assets/42092474-6953-458e-8983-2192ea9bb8f5)
*The app interface showing container selector, loading summary, product form, and 3D visualization*

## Features

✨ **Key Features:**
- 🚢 Support for multiple standard container types (20ft, 40ft, 40ft HC, 45ft HC)
- 📦 Add multiple products with custom dimensions, weight, and quantities
- 📊 Real-time CBM calculation and utilization tracking
- 🤖 Auto-fill feature to calculate maximum cartons for each product
- 🎨 Interactive 3D container visualization using Three.js
- ⚠️ Overload warnings for volume and weight limits
- 💾 State management with Zustand for seamless updates

## Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **3D Graphics:** Three.js
- **State Management:** Zustand
- **Styling:** CSS3 with modern features

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ione2025/container-loading-calculator.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd container-loading-calculator
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
Access the application at `http://localhost:3000`

**Production Build:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Usage Guide

1. **Select Container Type:** Choose from standard container sizes (20ft, 40ft, 40ft High Cube, 45ft High Cube)

2. **Add Products:**
   - Enter product name
   - Input dimensions (length, width, height in cm)
   - Specify weight (kg) and quantity
   - Use "Auto Fill Max" to calculate maximum cartons that fit

3. **View Results:**
   - Real-time CBM calculations
   - Loading summary with utilization percentage
   - Interactive 3D visualization showing products in container
   - Warnings for overloading

4. **Manage Products:**
   - Remove products as needed
   - Switch container types to see updated calculations

## Project Structure

```
container-loading-calculator/
├── src/
│   ├── components/          # React components
│   │   ├── CBMSummary.tsx
│   │   ├── Container3DView.tsx
│   │   ├── ContainerSelector.tsx
│   │   ├── ProductForm.tsx
│   │   └── ProductList.tsx
│   ├── store/              # State management
│   │   └── loadingStore.ts
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── containerUtils.ts
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   └── main.tsx            # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request with your changes.

## Troubleshooting

### Port Already in Use
If you see an error like `Port 3000 is already in use`, either:
- Stop the other application using that port
- Or Vite will automatically use the next available port (check the terminal output)

### Build Issues
If you encounter build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### 3D Visualization Not Loading
If the 3D container view is blank:
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Check browser console for WebGL errors
- Make sure hardware acceleration is enabled in your browser

### Need Help?
- Check the [Issues](https://github.com/ione2025/container-loading-calculator/issues) page
- Create a new issue with details about your problem

## License

This project is open source and available under the MIT License.