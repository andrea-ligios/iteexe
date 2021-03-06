(function() {
	tinymce.PluginManager.requireLangPack('clearfloat');
	tinymce.create('tinymce.plugins.ClearFloatPlugin', {
		init : function(ed, url) {
	
			ed.addCommand('mceClearFloat', function() {
                if (ed.selection.getContent()=="") {
                    var c = '<br style="clear:both" />';
                    ed.execCommand('mceInsertContent', false, c, {skip_undo : 1});
                }
			});

			ed.addButton('clearfloat', {title : 'clearfloat.clearfloat_desc', cmd : 'mceClearFloat', image : url + '/img/clearfloat.gif' });
			
		},
	
		getInfo : function() {
			return {
				longname : 'Clear float plugin',
				author : 'Ignacio Gros',
				authorurl : 'http://www.gros.es',
				version : "1.0"
			};
		}
	});
	
	// Register plugin
	tinymce.PluginManager.add('clearfloat', tinymce.plugins.ClearFloatPlugin);
})();