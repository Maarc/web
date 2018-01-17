Flavors.Layout.Shared={};
(function(){var c=Flavors.Global.namespace("Flavors.Layout.Shared"),e=Flavors.Logger.getLogger(c.__name__),i=false,h=null;c.services={};c.preInit=function(){e("preInit")};c.init=function(){e("init");c.initRegisterPanels();c.initPermalinkNavigation();e("Initialized")};c.reorderList=function(a,b,f){var d=$(a),g={};d.find("li").each(function(){g[f(this)]=this;$(this).remove()});$.each(b,function(k,l){e("reorder item...");d.append(g[l])})};var j=window.layout_name=="slider"?"#layout-about-navs .layout-about-item-label":".layout-about-nav-label, .layout-about-nav-icon";
c.initNavigation=function(){e("initNavigation");$(j).live("click",function(a){e("nav click handler");a.preventDefault();if(!i){var b=$(this).hasClass("about_text"),f=$(this);$(this).trigger("service-nav-click",a);$(this).closest("li").each(function(){var d=this.id.replace("layout-about-nav-","");if(!(d&&d=="0-contact"))if(d&&d=="home")b||c.closeAllServices();else if(d){e("serviceAnchor="+d);if(d=c.preparePanel(d))if(b)window.layout_name!="divided"?c.closeAllServices():setTimeout(function(){$("#layout-about-navs .layout-about-nav-label:first").length>
0?$("#layout-about-navs .layout-about-nav-label:first").click():$("#layout-about-navs .layout-about-nav-icon:first").click();Flavors.Layout.Shared.setIcon()},100);else{c.transitionToPanel(d);c.setNavState(f)}}})}})};c.setNavState=function(a){e("setNavState");try{$(j).each(function(){$(this).removeClass("about_text").addClass("about_links")});a.removeClass("about_links").addClass("about_text")}catch(b){}};c.closeAllServices=function(a){e("closeAllServices");a&&a.preventDefault();if(h){$(h.element).hide();
$("#layout-content-accounts").hide();h=null}$.address.value("_");$(j).each(function(){$(this).removeClass("about_text").addClass("about_links")});$("#layout-about-nav-home").find(".layout-about-nav-label, .layout-about-nav-icon").removeClass("about_links").addClass("about_text");$(window).trigger("service-nav-close")};c.transitionToPanel=function(a){e("transitionToPanel() serviceAnchor="+a.serviceAnchor);i=true;var b=function(){$(a.element).show();$("#layout-content-accounts").show();$.address.value(a.serviceAnchor.replace("-",
"/"));$(".content-map-embed").each(function(){$(this).googleMap($(this).attr("rel"))});$(".content-custom-map-embed").each(function(){$(this).googleMapCustom()});var f=$(a.element).find(".layout-content-nav-dropdown-menu-item:first");f.length>0?f.trigger("click",true):$(window).trigger("service-nav-load-complete");h=a;i=false;$(window).trigger("service-nav-open")};h?$("#layout-content-accounts").hide(0,function(){$(h.element).hide();h=a;b()}):b()};c.switchToService=function(a){e("switchToService() serviceAnchor="+
a);if(a=="_")window.layout_name!="divided"?c.closeAllServices():setTimeout(function(){$("#layout-about-navs .layout-about-nav-label:first").length>0?$("#layout-about-navs .layout-about-nav-label:first").click():$("#layout-about-navs .layout-about-nav-icon:first").click();Flavors.Layout.Shared.setIcon()},100);else{var b=c.preparePanel(a);b&&c.transitionToPanel(b);c.setNavState($("#layout-about-nav-"+a+" .layout-about-nav-label"))}};c.initRegisterPanels=function(){e("initRegisterPanels");for(var a in accounts)c.registerPanel(a)};
c.registerPanel=function(a){e("registerPanel serviceAnchor="+a);c.services[a]={initialized:false};c.services[a]=new Flavors.Panel(a)};c.initPermalinkNavigation=function(){e("initPermalinkNavigation");$.address.strict(false);$.address.externalChange(function(a){e("$.address.externalChange()");$("#layout-about-nav-home").find(".layout-about-nav-label, .layout-about-nav-icon").removeClass("about_links").addClass("about_text");if(a.value=="contact")$("#layout-about-contact-link-nav").trigger("click");
else if(a.value!="/"){a=a.value.replace("/","-");e("serviceAnchor="+a);if(a.length>0)c.switchToService(a);else if(window.service_onload||window.layout_name=="divided")setTimeout(function(){$("#layout-about-navs .layout-about-nav-label:first").length>0?$("#layout-about-navs .layout-about-nav-label:first").click():$("#layout-about-navs .layout-about-nav-icon:first").click();Flavors.Layout.Shared.setIcon()},100)}})};c.setIcon=function(){$.browser.mozilla&&parseFloat($.browser.version)<2.1&&setTimeout(function(){var a=
$("link[type=image/vnd.microsoft.icon]").remove().attr("href");$('<link rel="icon" type="image/vnd.microsoft.icon" href="'+a+'" />').appendTo("head");e("Creating new link image/vnd.microsoft.icon, => "+a)},100)};c.initSubNavigation=function(a){e("initSubNavigation");$("body").click(function(b){b=$(b.target);!b.hasClass("layout-content-nav-dropdown")&&!b.hasClass("layout-content-nav-dropdown-text")&&!b.hasClass("layout-content-nav-dropdown-menu")&&$(".layout-content-nav-dropdown-menu").hide()});if(a.find(".layout-content-nav-dropdown-menu-item").length==
1){a.find(".layout-content-nav-dropdown").addClass("layout-content-nav-dropdown-disabled");a.find(".layout-content-nav-dropdown-text").removeClass("content_links")}else{a.find(".layout-content-nav-dropdown").removeClass("layout-content-nav-dropdown-disabled");a.find(".layout-content-nav-dropdown-text").addClass("content_links")}a.find(".layout-content-nav-dropdown").click(function(){$(this).find(".layout-content-nav-dropdown-menu").slideDown(200)});a.find(".content_links_arrow_down").click(function(){$(this).parent(".layout-content-nav-dropdown").find(".layout-content-nav-dropdown-menu").slideDown(200)});
a.find(".layout-content-nav-dropdown-menu-item").click(function(b,f){b.preventDefault();if(f||!$(this).hasClass("layout-content-nav-dropdown-menu-item-selected")){var d=$(this).attr("data-nav-id");a.find(".layout-content-nav-dropdown-menu-item").removeClass("layout-content-nav-dropdown-menu-item-selected").removeClass("content_text");$(this).addClass("layout-content-nav-dropdown-menu-item-selected").addClass("content_text");a.find(".layout-content-nav-dropdown-text").text($(this).text());a.find(".layout-content-panels:visible").length>
0?a.find(".layout-content-panels:visible").hide(0,function(){c.showSubPanel(a,d)}):c.showSubPanel(a,d)}})};c.showSubPanel=function(a,b,f){e("showSubPanel");if(f===undefined)f=true;var d=a.find(".layout-content-subaccount-"+b);window.layout_name.indexOf("columns")>-1&&d.parents(".layout-content-account").find(".layout-content-pagination").remove();$(window).trigger("onShowPanel",[a,b]);if(d.length==0)$(window).trigger("service-nav-load-complete");else{var g=12/parseInt(a.find(".layout-content-subaccount-"+
b).attr("data-columns"));d.parent().find(".layout-content-nav").removeClass("layout-invisible");d.addClass("layout-invisible").show().isotope({animationOptions:{duration:0,queue:false},itemSelector:".layout-content-panel",filter:":not(.layout-invisible, .galleria)",layoutMode:"masonry",itemPositionDataEnabled:true,transformsEnabled:false,hiddenStyle:{opacity:0},visibleStyle:{opacity:1}}).removeClass("layout-invisible");$(".layout-content-button-back").hide();if(window.layout_name.indexOf("columns")>
-1)setTimeout(function(){var k=d.hasClass("content-blog")?g:g<3?6*g:3*g;d.loadDeferredImages({showLoader:f,loadCount:k});c.buildPanelFeatures(a,d,g)},0);else{d.loadDeferredImages({showLoader:f});c.buildPanelFeatures(a,d,g)}}};c.buildPanelFeatures=function(a,b,f){e("buildPanelFeatures");if(f){c.setPagination(b,f);b.find(".content-map-embed").each(function(){$(this).googleMap($(this).attr("rel"))});b.find(".content-custom-map-embed").each(function(){$(this).googleMapCustom()});b.hasClass("content-blog")&&
b.blogEmbedResize()}else b.isotope("reLayout",function(){Flavors.Global.fireRelayout($(this));var d=setInterval(function(){if(smReady){clearInterval(d);setTimeout(function(){b.hasClass("content-audio")&&threeSixtyPlayer.init(b);b.hasClass("content-audio-set")&&threeSixtyPlayer.init(b);$.browser.msie&&parseInt($.browser.version,10)==7&&$(".sm2_link:first").hide().show();b.isotope("reLayout")},1E3)}},100);c.initPhotoGalleria(b);c.initVideoGalleria(b);$(window).trigger("service-nav-load-complete");$(".layout-content-button-back").show()});
a&&a.is(".layout-content-account-type-formspring")&&a.find("form").ajaxForm({url:c.getFormspringURL(),dataType:"json",success:function(d){if(d&&d.success){a.find(".content-button").val("Your question has been sent.");a.find("textarea").val("")}else a.find(".content-button").val("An error occured, try again.");setTimeout(function(){a.find(".content-button").val("Ask a question").removeAttr("disabled")},5E3)},error:function(){a.find(".content-button").val("An error occured, try again.");setTimeout(function(){a.find(".content-button").val("Ask a question").removeAttr("disabled")},
5E3)},beforeSubmit:function(){if($.trim(a.find("textarea").val())==""){a.find(".content-button").val("Please enter a question.").attr("disabled","disabled");setTimeout(function(){a.find(".content-button").val("Ask a question").removeAttr("disabled")},5E3);return false}a.find(".content-button").val("Sending to Formspring...").attr("disabled","disabled")}})};c.setPagination=function(a,b){e("setPagination");a.parent().find(".layout-content-pagination").remove();if(window.layout_name.indexOf("columns")>
-1){b=a.hasClass("content-blog")?b:b<3?6*b:3*b;var f=false}else{b=12*b;f=true}a.easyPaginate({step:b,numeric:f,controls:"layout-content-pagination",callback:function(){if(window.layout_name.indexOf("columns")==-1)$(window).scrollTo(0,0);else{var d=a.parents(".jspScrollable").data("jsp");d!==undefined&&d.scrollTo(0,0)}window.layout_name=="slider"&&setTimeout(function(){$(window).trigger("service-nav-load-complete")},100)}})};c.initPhotoGalleria=function(a){e("initPhotoGalleria");if(a.hasClass("content-panel-photo-large"))if(a.find(".galleria:first").data("galleria")===
undefined){a.find(".galleria:first").galleria({imagePan:false,imageCrop:false,fullscreenCrop:false,maxScaleRatio:1,dataSelector:"span",popupLinks:true,dataConfig:function(b){if($.trim($(b).attr("data-large"))==""&&$.trim($(b).attr("data-big"))=="")var f=$(b).attr("data-src"),d=$(b).attr("data-src");else if($.trim($(b).attr("data-big"))==""){f=$(b).attr("data-large");d=$(b).attr("data-large")}else{f=$.trim($(b).attr("data-large"))==""?$(b).attr("data-big"):$(b).attr("data-large");d=$(b).attr("data-big")}return{thumb:$(b).attr("data-src"),
image:f,big:d,title:$(b).attr("data-title"),descripiton:$(b).attr("data-alt"),link:$(b).attr("data-link")}},extend:function(){this.bind("fullscreen_enter",function(){a.find(".galleria:first").removeClass("layout-invisible")});this.bind("fullscreen_exit",function(){a.find(".galleria:first").addClass("layout-invisible")})}});a.find(".content-gallery-fullscreen").live("click",function(b){b.preventDefault();var f=$(this),d=$(this).parents(".layout-content-panels").find(".galleria:first").data("galleria");
d.enterFullscreen(function(){setTimeout(function(){d.show(parseInt(f.attr("data-index")));d.$("image").css("opacity","1")},1E3)})});a.find(".content-gallery-zoom").live("click",function(b){b.preventDefault();b=$(this);$(this).parents(".layout-content-panels").find(".galleria:first").data("galleria").openLightbox(parseInt(b.attr("data-index")))})}};c.initVideoGalleria=function(a){e("initVideoGalleria");if(a.hasClass("content-panel-video-large"))if(a.find(".galleria:first").data("galleria")===undefined){a.find(".galleria:first").galleria({imagePan:false,
imageCrop:false,fullscreenCrop:false,maxScaleRatio:1,dataSelector:"span",popupLinks:true,preload:0,queue:false,dataConfig:function(b){return{thumb:$(b).attr("data-src"),image:$(b).attr("data-large"),imageWidth:$(b).attr("data-large-width"),imageHeight:$(b).attr("data-large-height"),big:$(b).attr("data-large"),embed:$(b).attr("data-embed"),title:$(b).attr("data-title"),descripiton:$(b).attr("data-alt")}},extend:function(){this.bind("fullscreen_enter",function(){a.find(".galleria:first").removeClass("layout-invisible")});
this.bind("fullscreen_exit",function(){a.find(".galleria:first").addClass("layout-invisible")})}});a.find(".content-gallery-fullscreen").live("click",function(b){b.preventDefault();var f=$(this),d=$(this).parents(".layout-content-panels").find(".galleria:first").data("galleria");d.enterFullscreen(function(){setTimeout(function(){d.show(parseInt(f.attr("data-index")));d.$("image").css("opacity","1")},1E3)})});a.find(".content-gallery-thumb img, .content-gallery-play").live("click",function(b){b.preventDefault();
b=$(this);$(this).parents(".layout-content-panels").find(".galleria:first").data("galleria").openLightbox(parseInt(b.parents(".content-gallery-thumb").find(".content-gallery-play").attr("data-index")))})}};c.preparePanel=function(a){e("preparePanel() serviceAnchor="+a);if(a in c.services){a=c.services[a];if(a.initialized)return a;var b=$(a.element);b.find(".layout-content-panels").length>1&&b.find(".layout-content-panels").hide();c.initSubNavigation(b,a);a.initialized=true;Flavors.Global.setFuzzyDate();
return a}};c.getFormspringURL=function(){if(DOMAIN.length==0||window.location.href.indexOf(DOMAIN)==-1)var a="/"+USERNAME+"/formspring/profile_ask";else{a=window.location.href;if(a.indexOf("?")>-1)a=a.slice(0,a.indexOf("?"));a=a.replace(new RegExp(/#.*$/),"").replace(new RegExp(/\/$/),"")+"/"+USERNAME+"/formspring/profile_ask"}return a};$windowElm=$(window);$aboutElm=$("#layout-about");c.aboutChangePosition=function(){e("aboutChangePosition");$windowElm.height()<$aboutElm.outerHeight()?$aboutElm.css("position",
"absolute"):$aboutElm.css("position","fixed")};c.narrowScreen=function(a){e("narrowScreen");$windowElm.width()<a?$("body").addClass("layout-narrowscreen"):$("body").removeClass("layout-narrowscreen")};c.addService=function(a){e("addService");$("#layout-about-navs").removeClass("layout-hidden");$("#layout-about-navs").append($.LI({id:"layout-about-nav-"+a.anchor,"class":"layout-about-nav-"+a.id+" layout-about-item"},$.SPAN({"class":"layout-about-item-label about_background"},$.SPAN({"class":"layout-about-nav-label"},
a.title))));window.hide_service_icon_labels&&$(".layout-about-nav-"+a.id+" .layout-about-nav-label").hide();$("#layout-about-nav-0-contact").remove().appendTo("#layout-about-navs");Flavors.Layout.aboutChangePosition();Flavors.Page.setUserpageImageColors("about_background");var b=$.LI({"class":"layout-content-account-type-"+a.token+" layout-content-account layout-content-account-id-"+a.id,id:"layout-content-account-anchor-"+a.anchor});$(b).html(a.html).appendTo($("#layout-content-accounts"));c.registerPanel(a.anchor);
c.switchToService(a.anchor);Flavors.Page.initExternalLinksNewWindow();window.accounts[a.anchor]={serviceId:String(a.id),type:"type"in a?a.type:a.token}};c.removeService=function(a){e("removeService");$(".layout-content-account-id-"+a+", .layout-about-nav-"+a).fadeOut(250,function(){$(this).remove();$("#layout-about-nav-0-contact").remove().appendTo("#layout-about-navs")});$servicePanel=$(".layout-content-account-id-"+a);$servicePanel.remove();c.closeAllServices();Flavors.Layout.aboutChangePosition()};
c.replaceService=function(a){e("replaceService");$("#layout-content-account-anchor-"+a.anchor).html(a.html);Flavors.Page.initExternalLinksNewWindow();c.registerPanel(a.anchor);c.switchToService(a.anchor)};c.reorderServices=function(a){e("reorderServices");$("#layout-about-navs").reorderList(a,function(b){return parseInt($(b).attr("class").match(/\d+/)[0])},function(){$("#layout-about-nav-0-contact").remove().appendTo("#layout-about-navs")})};c.addLink=function(a){e("addLink");$("#layout-about-links").append($.LI({"class":"layout-about-item",
id:"layout-about-link-"+a.id},$.A({href:a.url,rel:"nofollow","class":"layout-about-item-label about_background",title:a.title},a.title)));Flavors.Page.initExternalLinksNewWindow();Flavors.Layout.aboutChangePosition()};c.reorderLinks=function(a){e("reorderLinks");c.reorderList("#layout-about-links",a,function(b){return parseInt($(b).attr("id").match(/\d+/)[0])})}})();