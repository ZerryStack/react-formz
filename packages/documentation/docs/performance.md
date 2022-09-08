---
sidebar_position: 2
---

# Performance

React Formz is blazing fast out of the box and you should not have to worry about optimizations. React Formz is designed in such
a way that when an inputs value changes **only** that input is re-rendered. This ensures maximum performance and also near constant performance because no matter how many inputs you are rendering, only one input will change at a time.

The example below renders 100 Material UI inputs which are known to be slow and heavy. As you will see, there is no lag when
interacting with the form as is common with other form libraries.

In addition you will notice how little boilerplate code you have to write which is a common problem with form libraries. I wanted
a library that makes writing forms feel natural.

<iframe src="https://codesandbox.io/embed/zerry-react-formz-performance-1kk9jb?fontsize=14&hidenavigation=1&theme=dark"
     style={{ width: "100%", height: 500 }}
     title="zerry-react-formz-performance"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
