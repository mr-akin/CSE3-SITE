'use strict';

Vue.config.devtools = true;

Vue.component('card', {
	  props: ['dataImage','sem1','sem2','link'],
  template: '\n    <div class="card-wrap"\n @click="gotoLink"   @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info" @click.native="gotoLink">\n          <slot name="header"></slot>\n          <slot name="content"></slot><button class="semesterBtn" @click="gotoLink">SEMESTER {{sem1}}</button>\n<button class="semesterBtn" @click.native="gotoLink">SEMESTER {{sem2}}</button>\n        </div>\n      </div>\n    </div>',
  mounted: function mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },

  data: function data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
		link:""
    };
  },
  computed: {
    mousePX: function mousePX() {
      return this.mouseX / this.width;
    },
    mousePY: function mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle: function cardStyle() {
      var rX = this.mousePX * 30;
      var rY = this.mousePY * -30;
      return {
        transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
      };
    },
    cardBgTransform: function cardBgTransform() {
      var tX = this.mousePX * -40;
      var tY = this.mousePY * -40;
      return {
        transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)'
      };
    },
    cardBgImage: function cardBgImage() {
      return {
        backgroundImage: 'url(' + this.dataImage + ')'
      };
    }
  },
  methods: {
	 gotoLink:function(){
		// alert(this.link);
		 window.location.replace("./"+this.link);
	 } ,
	switchPage: function(link){
		alert(link)	;
	},
    handleMouseMove: function handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter: function handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this = this;

      this.mouseLeaveDelay = setTimeout(function () {
        _this.mouseX = 0;
        _this.mouseY = 0;
      }, 1000);
    }
  }
});
Vue.component('sem-btn',{
		props:['sem','link'],
	//template:'<button class="semesterBtn" @click="gotoLink({{link}})">SEMESTER {{sem}}</button>',
		template:'<button class="semesterBtn" @click.native="gotoLink">SEMESTER {{sem}}</button>',
	data:function(){
		return {link:this.link,sem:this.sem};
},
	methods:{
		gotoLink:function(){
		alert('hello');
	}
	}
});
var app = new Vue({
  el: '#app',
	data:{
		pp:0
	}
	
});