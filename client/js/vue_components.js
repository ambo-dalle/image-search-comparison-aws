Vue.component('login-form', {
    template: `<div class="ui container">
       <div id="status" class="ui header" style="font-size: 2em;"></div>
            <button @click="facebookLoginMethod" id="login" class="ui facebook button">
                <i class="facebook icon"></i>
            Facebook Login</button> 
    </div>`
})