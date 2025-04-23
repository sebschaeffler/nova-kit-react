# NOVA Kit React - Component Library

[![npm version](https://img.shields.io/npm/v/nova-kit-react.svg)](https://www.npmjs.com/package/@sebschaeffler/nova-kit)
[![npm downloads](https://img.shields.io/npm/dm/nova-kit-react.svg)](https://www.npmjs.com/package/nova-kit-react)
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A modern collection of reusable React UI components, layouts, and utility methods — built for fast and flexible development.



## 📚 **Live documentation:** 

Click [here](https://sebschaeffler.github.io/nova-kit-react) to access the Storybook.

---

## ⚡️ Installation

Install with your preferred package manager:

```bash
# npm
npm install nova-kit-react

# yarn
yarn add nova-kit-react

# pnpm
pnpm add nova-kit-react
```

## ⚙️ Prerequisites

Before using nova-kit-react, make sure your project meets the following requirements:

- React: ^18.0.0
- Node.js: >= 20 recommended
- Tailwind CSS: Strongly recommended for styling

➤ [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)

TanStack Query: Used for data fetching and state management

➤ [TanStack Query](https://tanstack.com/query)

React Hook Form: For form handling and validation

➤ [React Hook Form](https://react-hook-form.com/)


## 🚀 Usage
Here’s a quick example of how to use a component:

```tsx
import { Button } from 'nova-kit-react';

export default function Example() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## 🧪 Example: Form with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { Input, Button } from 'nova-kit-react';

type FormData = {
  email: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message}
      />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
```

## ✨ - Components

Browse the source code [here](./src/components).

## 🎨 Styling

This library is styled using Tailwind CSS.
Ensure it's correctly configured in your project to use nova-kit-react seamlessly.
Template is available [here](./src/nova-styles.css).

## ⭐️ - Background story

The name was inspired by the concept of a "nova" – a
stellar explosion that signifies a powerful and luminous burst of energy against
the dark backdrop of space. Just as a nova illuminates the cosmos, our library
aims to shine a light on best practices, modern sleek components and shared
layouts & utilities. <br />

Nova is a React-based library. The concept of a "Supernova" – an even more powerful and transformative event - can transcend its initial form.
In the future the transition from Nova Kit to Supernova Kit could mark a pivotal moment in our journey by introducing a technology-agnostic library that can be used across different platforms.


---
Built and maintained with ❤️ by Sebastien Schaeffler - 2024
