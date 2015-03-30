define [ 'marionette' ], ( Marionette )->

   class ScreenOneView extends Marionette.ItemView


   		template :'<div class="wp-social-login-widget socailMedia">

						<div class="wp-social-login-connect-with">Connect with:</div>

						<div class="wp-social-login-provider-list">

							<a rel="nofollow" href="http://localhost/aprtmentnetwork/homes/wp-login.php?action=wordpress_social_authenticate&amp;mode=login&amp;provider=Facebook&amp;redirect_to=http%3A%2F%2Flocalhost%2Faprtmentnetwork%2Fhomes%2Fbooking%2F%3Funit_id%253D261unit_name%253D401finalcost%253DRs.%252022%252C01%252C979Rs.%252022%252C01%252C979recAmount%253DRs.%25202%252C91%252C752.00Rs.%25202%252C91%252C752" title="Connect with Facebook" class="wp-social-login-provider wp-social-login-provider-facebook" data-provider="Facebook">
								<img alt="Facebook" title="Connect with Facebook" src="http://localhost/aprtmentnetwork/homes/wp-content/plugins/wordpress-social-login/assets/img/32x32/wpzoom/facebook.png">
							</a>

							<a rel="nofollow" href="http://localhost/aprtmentnetwork/homes/wp-login.php?action=wordpress_social_authenticate&amp;mode=login&amp;provider=Google&amp;redirect_to=http%3A%2F%2Flocalhost%2Faprtmentnetwork%2Fhomes%2Fbooking%2F%3Funit_id%253D261unit_name%253D401finalcost%253DRs.%252022%252C01%252C979Rs.%252022%252C01%252C979recAmount%253DRs.%25202%252C91%252C752.00Rs.%25202%252C91%252C752" title="Connect with Google" class="wp-social-login-provider wp-social-login-provider-google" data-provider="Google">
								<img alt="Google" title="Connect with Google" src="http://localhost/aprtmentnetwork/homes/wp-content/plugins/wordpress-social-login/assets/img/32x32/wpzoom/google.png">
							</a>

						</div> 

						<div class="wp-social-login-widget-clearing"></div>

					</div>
					<div class="userinfo"></div>'

   		onShow:->
   			usermodel = new Backbone.Model USER
   			console.log usermodel
   			if parseInt(usermodel.get('id')) != 0
   				$('.socailMedia').hide()
   				$('.userinfo').text 'Hello '+usermodel.get('display_name')
   				msgbus.showApp 'booking:screen:two'
   				.insideRegion  App.layout.screenTwoRegion
   					.withOptions()
			







	










