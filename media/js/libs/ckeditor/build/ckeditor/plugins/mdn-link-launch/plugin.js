﻿CKEDITOR.plugins.add("mdn-link-launch",{requires:"link",init:function(a){a.addCommand("launchLink",new CKEDITOR.launchCommand);a.addMenuItems&&a.addMenuItems({launchLink:{label:gettext("Launch"),command:"launchLink",group:"link",order:6}});a.contextMenu&&a.contextMenu.addListener(function(b){return!b||b.isReadOnly()||!CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,b)&&!CKEDITOR.plugins.link.getSelectedLink(a)?null:{launchLink:CKEDITOR.TRISTATE_OFF}})}});CKEDITOR.launchCommand=function(){};
CKEDITOR.launchCommand.prototype={exec:function(a){(a=CKEDITOR.plugins.link.getSelectedLink(a))&&a.$&&window.open(a.$.href)}};