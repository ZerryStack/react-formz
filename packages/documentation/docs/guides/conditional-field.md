---
sidebar_position: 1
---

# Conditional Fields

There will be times when you want to conditionally render a field based on the value or values of other fields. React Hook Form supports that out of the box with ease. You can use as `DependentField` as so:

```tsx
<TextField name="dob" />
<DependentField<{ dob: Date; favoriteDrink?: string; }> 
  name="favoriteDrink"
  dependencies={(values) => ({ dob: values.dob })} 
  as={({ input, dependencies }) => {
    if (dependencies.dob < 21) return null;
    return <TextInput />
  }}
/>
```

<iframe src="https://codesandbox.io/embed/zerry-react-formz-conditional-fields-0tpebi?fontsize=14&hidenavigation=1&theme=dark"
     style={{ width: "100%", height: 700 }}
     title="zerry-react-formz-conditional-fields"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
