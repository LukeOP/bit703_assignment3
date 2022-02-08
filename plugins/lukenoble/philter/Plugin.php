<?php

namespace lukenoble\Philter;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'lukenoble\Philter\Components\RecentImages' => 'RecentImages',
            'lukenoble\Philter\Components\UserImages' => 'UserImages',
            'lukenoble\Philter\Components\AddImages' => 'AddImages',
            'lukenoble\Philter\Components\DeleteImage' => 'DeleteImage',


        ];
    }

    public function registerSettings()
    {
    }
}
