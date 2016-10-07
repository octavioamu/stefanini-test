!function(){"use strict";angular.module("stefaniniTest",["ngAnimate","ngTouch","ngSanitize","ngAria","ui.router"])}(),function(){"use strict";angular.module("stefaniniTest").factory("getData",["$http",function(a){function t(t){return a({method:"GET",url:t})}return{get:t}}])}(),function(){"use strict";function a(a,t){var s=this;a.get("data/menu.json").then(function(a){s.menu=a.data},function(a){t.error("Cant find data",a)}),a.get("data/sections.json").then(function(a){s.sections=a.data},function(a){t.error("Cant find data",a)}),a.get("data/footer.json").then(function(a){s.footer=a.data},function(a){t.error("Cant find data",a)})}a.$inject=["getData","$log"],angular.module("stefaniniTest").controller("MainController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("stefaniniTest").run(a)}(),function(){"use strict";function a(a,t){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("stefaniniTest").config(a)}(),angular.module("stefaniniTest").run(["$templateCache",function(a){a.put("app/main/main.html",'<ng-include src="\'app/templates/header.html\'"></ng-include><main><section class=sec-area ng-repeat="section in main.sections"><div ng-if=$even><div class=content-box><h2 class=section-title>{{ section.title }}</h2><h3 class=section-subtitle>{{ section.subtitle }}</h3><p>{{ section.content }}</p><a href="{{ section.url }}" class=link-more>{{ section.moretext }}</a></div><a href="{{ section.url }}" class=feature-img><img ng-src="assets/images/{{ section.image }}" alt=""></a></div><div ng-if=$odd><a href="{{ section.url }}" class=feature-img><img ng-src="assets/images/{{ section.image }}" alt=""></a><div class=content-box><h2 class=section-title>{{ section.title }}</h2><h3 class=section-subtitle>{{ section.subtitle }}</h3><p>{{ section.content }}</p><a href="{{ section.url }}" class=link-more>{{ section.moretext }}</a></div></div></section></main><ng-include src="\'app/templates/footer.html\'"></ng-include>'),a.put("app/templates/footer.html",'<footer class=main-footer><div class=container><div class=col><div class="ft-module about"><span class=ft-logo></span><p>Vivamus viverra, ligula non tincidunt pulvinar, augue est sagittis leo, id feugiat enim lorem quis nisl. Quisque ac arcu egestas, convallis risus vitae, gravida enim.</p><p>Praesent iaculis ut lacus a mattis. Nam interdum, nulla id sodales viverra, quam eros commodo est, quis aliquam lectus.</p><a href="" class=ft-link-more><i class=arrow>&rang;</i> Read More</a></div><div class="ft-module social-icons"><div class=col-2><a href="" class=social-btn><i class=icon-rss></i> <span>Subscribe <small>to RSS Feed</small></span> </a><a href="" class=social-btn><i class=icon-fb></i> <span>Find Us <small>on Facebook</small></span> </a><a href="" class=social-btn><i class=icon-pt></i> <span>Follow Us <small>on Pinterest</small></span></a></div><div class=col-2><a href="" class=social-btn><i class=icon-tw></i> <span>Follow Us <small>on Twitter</small></span> </a><a href="" class=social-btn><i class=icon-gp></i> <span>Find Us <small>on Google +</small></span> </a><a href="" class=social-btn><i class=icon-db class=social-btn></i> <span>Follow Us <small>on Dribble</small></span></a></div></div></div><div class=col><span class=ft-title>Latest News</span><div ng-repeat="post in main.footer[0].blog" class=post><img ng-src={{post.image}} alt="" width=50><div class=post-content><a href=#>{{post.title}}</a><p>{{post.content}}</p><time datetime={{post.date}}>{{post.date | date:\'d MMMM, y\'}}</time></div></div></div><div class=col><div class="ft-module tags-widget"><span class=ft-title>Tags Widget</span> <a href="" class=tag ng-repeat="tag in main.footer[0].tags track by $index">{{tag}}</a></div><div class=ft-module><span class=ft-title>Useful Links</span><ul class=list-links><li ng-repeat="link in main.footer[0].usefulLinks"><a href={{link.url}}>{{link.name}}</a></li></ul></div></div><div class=col><div class=ft-module><span class=ft-title>Flickr Widget</span><div class=gallery><a href={{photo.url}} target=_blank class=gallery-item ng-repeat="photo in main.footer[0].flickr"><img ng-src={{photo.url}} alt="" width=70></a></div></div><div class=ft-module><span class=ft-title>Newsletter Widget</span><form action="" class=form-newsletter><input type=email placeholder="Your email here" name=""><button type=submit>&rarr;</button></form></div></div></div></footer><div class=sub-footer><div class=container>Copyright 2016 PSD.Graphics | All Rights Reserved | Designed by Aman Dhigra <a href="">Home</a> <a href="">Page</a> <a href="">Portfolio</a> <a href="">Blog</a> <a href="">Shop</a> <a href="">Travel</a> <a href="">Shortcodes</a> <a href="">Features</a> <a href="">Contact</a></div></div>'),a.put("app/templates/header.html",'<header class=main-header><nav><a href={{link.url}} ng-repeat-start="link in main.menu">{{link.item}} </a><a href=/ ng-repeat-end ng-if="$middle && 0 === ($index + 1) % 4" class=logo><img src=assets/images/logo.png alt="Logo PSD"></a></nav></header>')}]);
//# sourceMappingURL=../maps/scripts/app-7523038aff.js.map
