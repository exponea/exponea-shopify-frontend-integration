function bloomreachSDK(){
    if(typeof exponea == "undefined"){
      !function(e,n,t,i,o,r){function s(e){if("number"!=typeof e)return e;const n=new Date;return new Date(n.getTime()+1e3*e)}const c=4e3,a="xnpe_async_hide";function p(e){return e.reduce((function(e,n){return e[n]=function(){e._.push([n.toString(),arguments])},e}),{_:[]})}function m(e,n,t){const i=t.createElement(n);i.src=e;const o=t.getElementsByTagName(n)[0];return o.parentNode.insertBefore(i,o),i}function l(e){return"[object Date]"===Object.prototype.toString.call(e)}r.target=r.target||"https://api.exponea.com",r.file_path=r.file_path||r.target+"/js/exponea.min.js",o[n]=p(["anonymize","initialize","identify","getSegments","update","track","trackLink","trackEnhancedEcommerce","getHtml","showHtml","showBanner","showWebLayer","ping","getAbTest","loadDependency","getRecommendation","reloadWebLayers","_preInitialize","_initializeConfig"]),o[n].notifications=p(["isAvailable","isSubscribed","subscribe","unsubscribe"]),o[n].segments=p(["subscribe"]),o[n].snippetVersion="v3.0.0",function(e,n,t){e[n]["_"+t]={},e[n]["_"+t].nowFn=Date.now,e[n]["_"+t].snippetStartTime=e[n]["_"+t].nowFn()}(o,n,"performance"),function(e,n,t,i,o,r){e[o]={sdk:e[i],sdkObjectName:i,skipExperiments:!!t.new_experiments,sign:t.token+"/"+(r.exec(n.cookie)||["","new"])[1],path:t.target}}(o,e,r,n,i,RegExp("__exponea_etc__"+"=([\w-]+)")),function(e,n,t){m(e.file_path,n,t)}(r,t,e),function(e,n,t,i,o,r,p){if(!e.new_experiments)return;true===e.new_experiments&&(e.new_experiments={});const u=e.new_experiments.hide_class||a,_=e.new_experiments.timeout||c,f=encodeURIComponent(r.location.href.split("#")[0]);let d;e.cookies&&e.cookies.expires&&("number"==typeof e.cookies.expires||l(e.cookies.expires)?d=s(e.cookies.expires):e.cookies.expires.tracking&&("number"==typeof e.cookies.expires.tracking||l(e.cookies.expires.tracking))&&(d=s(e.cookies.expires.tracking))),d&&d<new Date&&(d=void 0);const g=e.target+"/webxp/"+n+"/"+r[t].sign+"/modifications.min.js?http-referer="+f+"&timeout="+_+"ms"+(d?"&cookie-expires="+Math.floor(d.getTime()/1e3):"");"sync"===e.new_experiments.mode&&r.localStorage.getItem("__exponea__sync_modifications__")?function(e,n,t,i,o){t[o][n]="<"+n+' src="'+e+'"></'+n+">",i.writeln(t[o][n]),i.writeln("<"+n+">!"+o+".init && document.writeln("+o+"."+n+'.replace("/'+n+'/", "/'+n+'-async/").replace("><", " async><"))</'+n+">")}(g,n,r,p,t):function(e,n,t,i,o,r,s,c){r.documentElement.classList.add(e);const a=m(t,i,r);function p(){o[c].init||m(t.replace("/"+i+"/","/"+i+"-async/"),i,r)}function l(){r.documentElement.classList.remove(e)}a.onload=p,a.onerror=p,o.setTimeout(l,n),o[s]._revealPage=l}(u,_,g,n,r,p,o,t)}(r,t,i,0,n,o,e),function(e,n,t){var i;e[n]._initializeConfig(t),(null===(i=t.experimental)||void 0===i?void 0:i.non_personalized_weblayers)&&e[n]._preInitialize(t),e[n].start=function(i){i&&Object.keys(i).forEach((e=>t[e]=i[e])),e[n].initialize(t)}}(o,n,r)}(document,"exponea","script","webxpClient",window,{
            target: "<<PROJECT API_ENDPOINT>>",
            token: "<<PROJECT TOKEN>>",
            experimental: {
                non_personalized_weblayers: true
            },
            track: {
                google_analytics: false,
            },
        });
        
        delete window.indexedDB;
        
        const getCookie = function (cname) {
              var name = cname + "=";
              var ca = document.cookie.split(";");
              for (var i = 0; i < ca.length; i++) {
                  var c = ca[i];
                  while (c.charAt(0) == " ") {
                      c = c.substring(1);
                  }
                  if (c.indexOf(name) == 0) {
                      return c.substring(name.length, c.length);
                  }
              }
              return undefined;
          };
          var cus = {};
          var cart_id = getCookie("cart"); //default Shopify cookie name is "cart"
          if (cart_id) cus.cart_id = cart_id;
          /* if (customer && customer.email){
            cus.email_id = customer.email | json;
            cus.shopify_id = customer.id | json;
          }*/
          exponea.start({
              "customer": cus,
              "track": {
                  "visits": true,
                  "default_properties": { "domain": "<<SHOPIFY DOMAIN>>" } // domain attribute 
              }
          });
      }
    console.log("pixel running"); //to remove
  }
  analytics.subscribe("checkout_started", async (event) => {
      let data = event.data.checkout;
      bloomreachSDK();
      exponea.track("checkout", {
          "step_title": "checkout_started",
          "shipping_city": data.shippingAddress.city || "",
          "shipping_country": data.shippingAddress.country || "",
          "total_price": data.totalPrice.amount || "",
          "currency": data.currencyCode
      })
  });
  analytics.subscribe("checkout_address_info_submitted", async (event) => {
      let data = event.data.checkout;
      bloomreachSDK();
      exponea.track("checkout", {
          "step_title": "shipping_information",
          "shipping_city": data.shippingAddress.city || "",
          "shipping_country": data.shippingAddress.country || "",
          "total_price": data.totalPrice.amount || "",
          "currency": data.currencyCode
      })
  });
  analytics.subscribe("checkout_completed", async (event) => {
      let data = event.data.checkout;
      bloomreachSDK();
      exponea.track("checkout", {
          "step_title": "checkout_completed",
          "shipping_city": data.shippingAddress.city || "",
          "shipping_country": data.shippingAddress.country || "",
          "total_price": data.totalPrice.amount || "",
          "currency": data.currencyCode
      })
  });
  analytics.subscribe("checkout_contact_info_submitted", async (event) => {
      let data = event.data.checkout;
  
      console.log(data);
  
      if (data.email || data.phone) bloomreachSDK();
  
      if(data.email)
          exponea.identify({
              email_id: data.email
          },
          {
              email: data.email
          })
      if (data.phone) {
          exponea.update({
              phone: data.phone
          })
      }
  });