---
sidebar_position: 1
---

# Dependent Fields

A `DependentField` is as `Field` that depends on other values in the form. React Formz has first class support for dependent fields right out of the box. 

Dependent fields are useful for validating fields against each other or changing a fields value based on the value of another field. So, for example let's say you want to set a checkbox to true whenever the value in the date of birth field is greater than or equal to 21. You would use a dependent field for that.

Dependent fields utilize the `selector` pattern to allow you to select which fields your component will subscribe to. Re-renders are optimized to only occur when its' value changes or when one of its' dependencies changes. You will pass in a dependencies selector that will extract the dependencies out of the form state. Those dependencies can then be used in validation or to change the value of the field.

```tsx
<TextField name="dob" />
<DependentField 
  name="favoriteDrink"
  dependencies={(values) => ({ dob: values.dob })} 
  validate={(_, { dob }) => {
    if (dob <= 21) {
      return "Must be 21 years old"
    }
  }} 
  onDependenciesChange={(dependencies, actions) => {
    if (dependencies.dob <= 21) {
      actions.setValue("N/A");
    }
  }}
/>
```

<iframe src="https://codesandbox.io/embed/zerry-react-formz-dependent-fields-owz5m0?fontsize=14&hidenavigation=1&theme=dark"
     style={{ width: "100%", height: 700 }}
     title="zerry-react-formz-dependent-fields"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
