import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'first-screen',
    loadChildren: () => import('./pages/first-screen/first-screen.module').then( m => m.FirstScreenPageModule)
  },
  {
    path: '',
    redirectTo: 'first-screen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'connection-lost',
    loadChildren: () => import('./pages/connection-lost/connection-lost.module').then( m => m.ConnectionLostPageModule)
  },
  {
    path: 'new-list',
    loadChildren: () => import('./pages/new-list/new-list.module').then( m => m.NewListPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'addtofavorite',
    loadChildren: () => import('./pages/addtofavorite/addtofavorite.module').then( m => m.AddtofavoritePageModule)
  },
  {
    path: 'newmessage',
    loadChildren: () => import('./pages/newmessage/newmessage.module').then( m => m.NewmessagePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-infos',
    loadChildren: () => import('./pages/profile-infos/profile-infos.module').then( m => m.ProfileInfosPageModule)
  },
  {
    path: 'collections',
    loadChildren: () => import('./pages/collections/collections.module').then( m => m.CollectionsPageModule)
  },


  
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'image',
    loadChildren: () => import('./pages/home/image/image.module').then( m => m.ImagePageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./pages/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'password-settings',
    loadChildren: () => import('./pages/password-settings/password-settings.module').then( m => m.PasswordSettingsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },

  {
    path: 'col/:id',
    loadChildren: () => import('./pages/collections/col/col.module').then( m => m.ColPageModule)
  },
  {
    path: 'wardrobes',
    loadChildren: () => import('./pages/wardrobes/wardrobes.module').then( m => m.WardrobesPageModule)
  },
  {
    path: 'wardrobe/:id',
    loadChildren: () => import('./pages/wardrobes/wardrobe/wardrobe.module').then( m => m.WardrobePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

