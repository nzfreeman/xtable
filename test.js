var app = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!'
  }
});

app.message = "change";

var app2 = new Vue({
  el:"#app2",
  data: {
    seen: false
  }
})
