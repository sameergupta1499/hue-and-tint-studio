import gsap from "gsap";
import { ref } from "vue";
class GScroll
{
	constructor (elmt, speed, onUpdate = () => true)
	{	
		this.speed = speed/10 || 0.06;
		this.elmt = elmt;
		this.isWheeling = null;
		this.deltaY = 0;
		this.update = onUpdate;
		this.deltaLimit = 40
		this.deltaDefault = 15
		this.deltaTouchEnhancer = 2.5;
		this.flag=false;
		this.offsetY = 0;
	}

	init ()
	{
		// console.log("BEFFFFFFFFFFFOOOOOOOOOOREEE", "scrollTop", this.scrollTop, "deltaY", this.deltaY, "current", this.current, "window.scrollY", 
		// window.scrollY, "this.height", this.height,"window.visualViewport.pageTop",window.visualViewport.pageTop,window.visualViewport)
		this.current = this.scrollTop = window.scrollY;

		this.height = document.querySelector(this.elmt).scrollHeight - window.innerHeight;
		this.deplacement = gsap.quickSetter(this.elmt, "y", "px");
		// console.log("HERHERERERERE", "scrollTop", this.scrollTop, "deltaY", this.deltaY, "current", this.current, "window.scrollY", window.scrollY, "this.height", this.height,window.visualViewport.pageTop);
		this.addTicker = () => {
	      this.playTicker();
	    }
	    gsap.ticker.add(this.addTicker);
	}

	// scroll() {
	// 	window.addEventListener('scroll', this.ref = (e) =>{
	// 		this.deltaY = e.deltaY;
	// 		window.clearTimeout( this.isWheeling );


    //         this.isWheeling = setTimeout( (e) => {
    //             this.deltaY = 0;
    //         }, 66);
	// 	});
	//   }

	scroll() {
		window.addEventListener('scroll', this.ref = (e) =>{
			// console.log("scrolled")
		});
	  }
	wheel()
	{
		window.addEventListener('wheel', this.ref = (e) => {
			const delta = e.deltaY;
			const limitedDelta = delta < -this.deltaLimit ? -this.deltaDefault : delta > this.deltaLimit ? this.deltaDefault : delta; // Assign -50 for delta less than -120, 50 for delta greater than 120, and keep the original value otherwise
			this.deltaY = limitedDelta+ this.deltaY;
			if (Math.abs(delta) < Math.abs(this.deltaY)) {
				this.deltaY = delta;
			}
			// console.log(delta,Math.abs(this.deltaY),Math.abs(limitedDelta))
			window.clearTimeout( this.isWheeling);
			// console.log(this.isWheeling,this.deltaY )
            this.isWheeling = setTimeout( (e) => {
                this.deltaY = 0;
            }, 66);

        });
	}
	touch() {
		this.touchStartY = 0;
		this.isTouching = false;
	  
		window.addEventListener('touchstart', (e) => {
		  this.touchStartY = e.touches[0].clientY;
		  this.isTouching = true;
		});
	  
		window.addEventListener('touchmove', (e) => {
			if (!this.isTouching) return;
			
			const deltaY = this.touchStartY - e.touches[0].clientY;
			this.deltaY = deltaY*this.deltaTouchEnhancer;
			this.touchStartY = e.touches[0].clientY;
			
			window.clearTimeout(this.isWheeling);
			this.isWheeling = setTimeout(() => {
			  this.deltaY = 0;
			}, 66);
		  });
	  
		window.addEventListener('touchend', () => {
		  this.isTouching = false;
		});
	  }

	resize()
	{
		this.height = document.querySelector(this.elmt).clientHeight-window.innerHeight;
	}
	setInitialPosition(){
		this.offsetY = window.visualViewport.pageTop;
		this.current = this.offsetY;
		window.scrollY = this.offsetY;
		this.scrollTop = -this.offsetY;
		this.height -= this.offsetY;
		this.deplacement(this.current);
	}

	playTicker(){
		if (this.flag==false){
			if (window.visualViewport.pageTop > 0) {
				// console.log("HEHRHEHREHREHRHERE",window.visualViewport.pageTop);
				this.setInitialPosition();
			}
			this.flag=true;
		}
		
		const dt = 1.0 - Math.pow(1.0 - this.speed, gsap.ticker.deltaRatio());

		if(this.scrollTop + this.deltaY > this.height){     //scrolltop+delta contains the destination pos. And we are checking if the sum is greater than height.
			this.scrollTop = this.height;
		}else if(this.scrollTop + this.deltaY < 0 && this.offsetY==0){
			// console.log("############################## IN FIRST CONDITION")
			this.scrollTop = 0;
		}else if(this.scrollTop + this.deltaY < -(this.offsetY) && this.offsetY != 0){
			this.scrollTop = -this.offsetY;
			// console.log("############################## IN second CONDITION",this.scrollTop + this.deltaY)
			// this.scrollTop = 0;
		}else if(this.deltaY !== 0){
			this.scrollTop += (this.deltaY);
			// console.log("############################## IN third CONDITION")
		}

		const diff = -this.scrollTop - this.current;
        if(Math.round(100*diff)/100 != 0){
        	this.current += diff * dt;
        	this.deplacement(this.current);   //translating the elem in this case body.
			window.scrollY=this.current-this.offsetY;
			// window.visualViewport.pageTop =0
			// this.scrollTo(this.current); 	// changing the window.Y scroll position
        }
		this.update();
        // console.log(this.current,window.visualViewport);
		console.log("CURRENT: ",this.current," ,scrollTop: ", this.scrollTop," ,visualViewport.pageTop: ", window.visualViewport.pageTop," ,height: ", this.height," ,deltaY: ",this.deltaY, "this.offsetY", this.offsetY);
        
    }
	scrollTo(targetY) {
		window.scrollY=targetY     //updating the scrollY
	  }

	destroy()
	{
		gsap.killTweensOf(this.elmt);
		window.removeEventListener('wheel', this.ref);
		// window.removeEventListener('scroll', this.ref);
		window.removeEventListener('touchstart', this.touchStartHandler);
		window.removeEventListener('touchmove', this.touchMoveHandler);
		window.removeEventListener('touchend', this.touchEndHandler);
		gsap.ticker.remove(this.addTicker);
	}
}

export function useSmoothScrollOnMounted() {
    const scroll = ref(new GScroll( "#scroll-page", 1 ))
    scroll.value.init()
    scroll.value.wheel()
	scroll.value.touch(); // Enable touch event
	// scroll.value.scroll(); // Enable touch event

    return scroll
}
