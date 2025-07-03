<script setup></script>

<template>
  <div class="min-h-screen">
    <LayoutAppNavbar />
    <LayoutAppMobileBar />
    <main class="pt-16 md:pt-16 pb-40">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
