# ipb-vuejs-client

This is a simple client for Invision Power Board to engage merchants with the forum. It uses the Invision Power board REST API with VueJS as a single file app.

You can see it in action in each extension listing in the marketplace of CubeCart.com.
e.g. [https://www.cubecart.com/extensions/plugins/paypal-checkout](https://www.cubecart.com/extensions/plugins/paypal-checkout)

This app demonstrates a number of VueJS features:
* **VueResource** - Predominetly for http request promises.
* **VueMoment** - To filter dates.
* **Vuex** - For reactive state management.
* Components
* Animated State Transitions
* Lifecycle Hooks
* Computed getters and setters
etc...


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

To use on production simply add a `data-tid` attribute to the app class container as the topic ID.

e.g.
```
<div id="app" data-tid="123"></div>
<script src=https://forums.example.com/ipb-vuejs-client.js></script>
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customise configuration
Just edit the ipb.config.jf file to have the correct API key and endpoint.
