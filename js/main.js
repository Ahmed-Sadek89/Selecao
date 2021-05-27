
/* global $ ,  let*/

$(document).ready(function () {
    /* global $ */
    'use strict';
    //identifing all variables and plugs-in
    let link1=document.getElementById('1'),
        link2=document.getElementById('2'),
        link3=document.getElementById('3'),
        link4=document.getElementById('4'),
        article1=document.getElementById('first-about'),
        article2=document.getElementById('second-about'),
        article3=document.getElementById('third-about'),
        article4=document.getElementById('forth-about'),
        portfolio1=document.getElementById('first-portfolio-link'),
        portfolio2=document.getElementById('second-portfolio-link'),
        portfolio3=document.getElementById('third-portfolio-link'),
        portfolio4=document.getElementById('forth-portfolio-link'),
        f1=document.getElementById('f1'),
        f2=document.getElementById('f2'),
        f3=document.getElementById('f3'),
        f4=document.getElementById('f4'),
        f5=document.getElementById('f5'),
        f6=document.getElementById('f6');
        aos_init();
        function aos_init() {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
              mirror: true
            });
          }
    $('.carousel-container button').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"501px"
            },1500,'easeInOutExpo');
        }
    })
    $(window).on({
        scroll:function(){
            var sc=$(window).scrollTop();
            console.log(sc)
            if(sc>=0 && sc<501)
            {
                $('.Up').fadeOut(1000);
                $('.nav-item:nth-child(1)').addClass('active').siblings().removeClass('active')
            }
            else if (sc>=501 && sc<1818){
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(2)').addClass('active').siblings().removeClass('active')
            }
            else if(sc>=1818 && sc<2434){
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(3)').addClass('active').siblings().removeClass('active')
            }
            else if(sc>=2434 && sc<4434)
            {
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(4)').addClass('active').siblings().removeClass('active')
            }
            else if(sc>=4434 && sc<5796)
            {
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(5)').addClass('active').siblings().removeClass('active')
            }
            else if(sc>=5796 && sc<6355)
            {
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(6)').addClass('active').siblings().removeClass('active')
            }
            else if(sc>=6355 )
            {
                $('.Up').fadeIn(1000);
                $('.nav-item:nth-child(8)').addClass('active').siblings().removeClass('active')
            }
        },
        load:function(){
            var sc=$(window).scrollTop();
            if(sc<300)
            {
                $('.Up').fadeOut(1000)
            }
            else{
                $('.Up').fadeIn(1000)
            }
            $('.overlay').fadeOut(2000,function(){
                $('body').css('overflow','auto')
                $('.overlay').remove()
            })
        }
    })
    $('#container').mixItUp();
    $('.venobox').venobox({                           
        titleattr  : 'data-title',
        numeratio  : true,
        infinigall : true,
    });
    $('.TESTIMONIALS-container').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // start Up
    $('.Up').on({
       
        click:function(){
            $('html,body').animate({
                scrollTop:"0px"
            },1500,'easeInOutExpo')
        }
    });
   
   
    $('.portfolio-details-container').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        
    })

    //identifing all variables

    //strat navbar
    //home
    $('.nav-item:nth-child(1)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"0px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(1)').addClass('active').siblings().removeClass('active')
        }
    });
    //about
    $('.nav-item:nth-child(2)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"501px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(2)').addClass('active').siblings().removeClass('active')
        }
    });
    //services2434
    $('.nav-item:nth-child(3)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"1818px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(3)').addClass('active').siblings().removeClass('active')
        }
    });
    //portfolio
    $('.nav-item:nth-child(4)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"2434px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(4)').addClass('active').siblings().removeClass('active')
        }
    });
    //pricing
    $('.nav-item:nth-child(5)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"4434px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(5)').addClass('active').siblings().removeClass('active')
        }
    });
    //team
    $('.nav-item:nth-child(6)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"5796px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(6)').addClass('active').siblings().removeClass('active')
        }
    });
    //contact
    $('.nav-item:nth-child(8)').on({
        click:function(){
            $('html,body').animate({
                scrollTop:"6355px"
            },1500,'easeInOutExpo');
            $('.nav-item:nth-child(8)').addClass('active').siblings().removeClass('active')
        }
    });
    //end navbar

   //start about
   link1.onclick=function(){
    link1.firstElementChild.classList.add('about-active');
    link2.firstElementChild.classList.remove('about-active');
    link3.firstElementChild.classList.remove('about-active');
    link4.firstElementChild.classList.remove('about-active');
    article1.classList.remove('d-none');
    article2.classList.add('d-none');
    article3.classList.add('d-none');
    article4.classList.add('d-none');
    };
    link2.onclick=function(){
        link1.firstElementChild.classList.remove('about-active');
        link2.firstElementChild.classList.add('about-active');
        link3.firstElementChild.classList.remove('about-active');
        link4.firstElementChild.classList.remove('about-active');
        article1.classList.add('d-none');
        article2.classList.remove('d-none');
        article3.classList.add('d-none');
        article4.classList.add('d-none');
    }
    link3.onclick=function(){
        link1.firstElementChild.classList.remove('about-active');
        link2.firstElementChild.classList.remove('about-active');
        link3.firstElementChild.classList.add('about-active');
        link4.firstElementChild.classList.remove('about-active');
        article1.classList.add('d-none');
        article2.classList.add('d-none');
        article3.classList.remove('d-none');
        article4.classList.add('d-none');
    }
    link4.onclick=function(){
        link1.firstElementChild.classList.remove('about-active');
        link2.firstElementChild.classList.remove('about-active');
        link3.firstElementChild.classList.remove('about-active');
        this.firstElementChild.classList.add('about-active');
        article1.classList.add('d-none');
        article2.classList.add('d-none');
        article3.classList.add('d-none');
        article4.classList.remove('d-none');
    }
   //end about

   //start portfolio
   portfolio1.onclick=function(){
    portfolio1.classList.add('portfolio-link-active');
    portfolio2.classList.remove('portfolio-link-active');
    portfolio3.classList.remove('portfolio-link-active');
    portfolio4.classList.remove('portfolio-link-active');
    };
   portfolio2.onclick=function(){
    portfolio1.classList.remove('portfolio-link-active');
    portfolio2.classList.add('portfolio-link-active');
    portfolio3.classList.remove('portfolio-link-active');
    portfolio4.classList.remove('portfolio-link-active');
    };
   portfolio3.onclick=function(){
    portfolio1.classList.remove('portfolio-link-active');
    portfolio2.classList.remove('portfolio-link-active');
    portfolio3.classList.add('portfolio-link-active');
    portfolio4.classList.remove('portfolio-link-active');
    };
   portfolio1.onclick=function(){
    portfolio1.classList.remove('portfolio-link-active');
    portfolio2.classList.remove('portfolio-link-active');
    portfolio3.classList.remove('portfolio-link-active');
    portfolio4.classList.add('portfolio-link-active');
    }; 
   //end portfolio

   //start F.A.Q
    

   f1.onclick=function(){
    if(f1.nextElementSibling.style.display==='none')
    {   
        
        f1.nextElementSibling.style.display='block';
        f2.nextElementSibling.style.display='none';
        f3.nextElementSibling.style.display='none';
        f4.nextElementSibling.style.display='none';
        f5.nextElementSibling.style.display='none';
        f6.nextElementSibling.style.display='none';
    }
    else{
        
        f1.nextElementSibling.style.display='none';
        f2.nextElementSibling.style.display='none';
        f3.nextElementSibling.style.display='none';
        f4.nextElementSibling.style.display='none';
        f5.nextElementSibling.style.display='none';
        f6.nextElementSibling.style.display='none';
    }
    }; 
    
    f2.onclick=function(){
     if(f2.nextElementSibling.style.display==='none')
    {
        f1.nextElementSibling.style.display='none';
        f2.nextElementSibling.style.display='block';
        f3.nextElementSibling.style.display='none';
        f4.nextElementSibling.style.display='none';
        f5.nextElementSibling.style.display='none';
        f6.nextElementSibling.style.display='none';
    }
    else{
        f1.nextElementSibling.style.display='none';
        f2.nextElementSibling.style.display='none';
        f3.nextElementSibling.style.display='none';
        f4.nextElementSibling.style.display='none';
        f5.nextElementSibling.style.display='none';
        f6.nextElementSibling.style.display='none';   
    }
    };
        
    f3.onclick=function(){
     if(f3.nextElementSibling.style.display==='none')
    {
        f1.nextElementSibling.style.display='none';
        f2.nextElementSibling.style.display='none';
        f3.nextElementSibling.style.display='block';
        f4.nextElementSibling.style.display='none';
        f5.nextElementSibling.style.display='none';
        f6.nextElementSibling.style.display='none';
    }
    else{
        f1.nextElementSibling.style.display='none'
        f2.nextElementSibling.style.display='none'
        f3.nextElementSibling.style.display='none'
        f4.nextElementSibling.style.display='none'
        f5.nextElementSibling.style.display='none'
        f6.nextElementSibling.style.display='none'    
    }
    };
    f4.onclick=function(){
     if(f4.nextElementSibling.style.display==='none')
    {
        f1.nextElementSibling.style.display='none'
        f2.nextElementSibling.style.display='none'
        f3.nextElementSibling.style.display='none'
        f4.nextElementSibling.style.display='block'
        f5.nextElementSibling.style.display='none'
        f6.nextElementSibling.style.display='none'
    }
    else{
        f1.nextElementSibling.style.display='none'
        f2.nextElementSibling.style.display='none'
        f3.nextElementSibling.style.display='none'
        f4.nextElementSibling.style.display='none'
        f5.nextElementSibling.style.display='none'
        f6.nextElementSibling.style.display='none'    
    }
    };
    f5.onclick=function(){
        if(f5.nextElementSibling.style.display==='none')
       {
           f1.nextElementSibling.style.display='none'
           f2.nextElementSibling.style.display='none'
           f3.nextElementSibling.style.display='none'
           f4.nextElementSibling.style.display='none'
           f5.nextElementSibling.style.display='block'
           f6.nextElementSibling.style.display='none'
       }
       else{
           f1.nextElementSibling.style.display='none'
           f2.nextElementSibling.style.display='none'
           f3.nextElementSibling.style.display='none'
           f4.nextElementSibling.style.display='none'
           f5.nextElementSibling.style.display='none'
           f6.nextElementSibling.style.display='none'    
       }
       };
       f6.onclick=function(){
        if(f6.nextElementSibling.style.display==='none')
       {
           f1.nextElementSibling.style.display='none'
           f2.nextElementSibling.style.display='none'
           f3.nextElementSibling.style.display='none'
           f4.nextElementSibling.style.display='none'
           f5.nextElementSibling.style.display='none'
           f6.nextElementSibling.style.display='block'
       }
       else{
           f1.nextElementSibling.style.display='none'
           f2.nextElementSibling.style.display='none'
           f3.nextElementSibling.style.display='none'
           f4.nextElementSibling.style.display='none'
           f5.nextElementSibling.style.display='none'
           f6.nextElementSibling.style.display='none'    
       }
       };
    //end F.A.Q 
    
    
    
});
    //end Up
