require(['jquery','bootstrap'],function($){$('.social-share-mobile').on('show.bs.modal',function(){$('.btn-fab').addClass('hide').removeClass('visible-xs');});$('.social-share-mobile').on('hidden.bs.modal',function(){$('.btn-fab').removeClass('hide').addClass('visible-xs');});});