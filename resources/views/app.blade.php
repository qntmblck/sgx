<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#991b1b">
  <meta name="format-detection" content="telephone=no">
  <link rel="icon" href="/favicon.ico" sizes="any">

  <title inertia>{{ config('app.name', 'SGX') }}</title>

  {{-- Ya no cargamos Figtree desde Bunny.net, usamos Segoe UI en el sistema --}}
  {{--
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
  --}}

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  @inertiaHead
</head>
<body class="font-sans antialiased">
  @inertia
</body>
</html>
