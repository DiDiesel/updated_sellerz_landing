<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="<?php echo site_url().'themes/default/images/'; ?>favicon.ico" type="image/x-icon" />
        <title><?php echo $ci->theme->get_page_title('Sellerz.com');?></title>
        <?php echo display_meta();?>
        <?php
        echo add_js(array('jquery-1.9.1.min','jquery.blockUI','common'));
        echo add_css(array('sellerz'));


        echo add_js('common');
        echo add_js('jquery.blockUI');
        if ($ci->session->userdata[$ci->theme->_data['section_name']]['site_direction'] == 'rtl')
        {
            //echo add_css(array('stylesheet_rtl'));
        }
        else
        {
            //echo add_css(array('stylesheet'));
            
        }
        ?>
        <script type="text/javascript">
            //Function to hide message
            function hide_msg(){
                $('#error_msg').hide();
            }
        </script>

    </head>
    

        