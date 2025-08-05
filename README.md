# Swan Assignment Component Library

A modern React component library built with Vite, TypeScript, and Storybook.

## 🚀 Features

- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Storybook Integration**: Interactive documentation and component playground
- **Vite Build**: Fast development and optimized builds
- **Modern Components**: Built with modern React patterns and best practices
- **Accessibility**: Components follow accessibility guidelines
- **Customizable**: Easy to customize with CSS classes

## 📦 Installation

```bash
npm install
```

### Font Setup

The library uses **Nunito Sans** font. To ensure the font loads correctly in your application, import the styles:

```javascript
// In your main application file
import "swan-assignment/styles";
```

Or if you prefer to import it in your CSS:

```css
@import "swan-assignment/styles";
```

**Note**: The font is automatically loaded when you import the styles, so you don't need to manually import Google Fonts.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build:lib` - Build the component library
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run lint` - Run ESLint

## 📚 Components

The component library is currently empty and ready for new components to be added.

### Adding New Components

1. Create your component in `src/components/YourComponent/index.tsx`
2. Add TypeScript types for your component
3. Create stories in `src/stories/YourComponent.stories.tsx`
4. Export from `src/index.ts`

Example component structure:

```tsx
// src/components/MyComponent/index.tsx
import { FC } from "react";

export interface MyComponentProps {
  // Define your props here
}

export const MyComponent: FC<MyComponentProps> = (props) => {
  return <div>{/* Your component implementation */}</div>;
};
```

Example story:

```tsx
// src/stories/MyComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "../components/MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Your default props
  },
};
```

## 🎨 Styling

The component library uses **CSS Modules** for styling. Each component has its own CSS module file that provides scoped styles. You can customize the appearance by:

1. **Using the `className` prop** to add additional classes
2. **Overriding CSS custom properties** in your application
3. **Importing the styles** from the library: `import 'swan-assignment/styles'`

### CSS Modules Structure

```
src/components/
├── CheckBox/
│   ├── index.tsx
│   └── CheckBox.module.css
└── FormField/
    ├── index.tsx
    └── FormField.module.css
```

## 📖 Storybook

Run Storybook to explore components interactively:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006` where you can:

- Browse all components
- View different variants and states
- Interact with components
- Copy code examples
- View accessibility information

## 📦 Building

To build the component library for distribution:

```bash
npm run build:lib
```

This creates:

- `dist/index.js` - CommonJS bundle
- `dist/index.es.js` - ES module bundle
- `dist/index.d.ts` - TypeScript definitions

## 📄 License

MIT License - see LICENSE file for details.
