# Container Loading Calculator

A modern web application for calculating and visualizing container loading capacity with real-time CBM (Cubic Meter) calculations and interactive 3D visualization.

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

## License

This project is open source and available under the MIT License.