<template>
<span class="rotate-slow">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Vonkajší kruh: Nuxt primárna -->
    <circle cx="100" cy="100" r="60" stroke="#00DC82" stroke-width="4" fill="none" />

    <!-- Vnútorný kruh: jemná sivá -->
    <circle cx="100" cy="100" r="30" stroke="#4B5563" stroke-width="2" fill="none" />

    <!-- Vertikála: tmavý textový tón -->
    <line x1="100" y1="40" x2="100" y2="160" stroke="#18181B" stroke-width="3" />

    <!-- Horizontála -->
    <line x1="40" y1="100" x2="160" y2="100" stroke="#18181B" stroke-width="3" />

    <!-- Diagonály: svetlá neutrálna -->
    <line x1="60" y1="60" x2="140" y2="140" stroke="#E5E7EB" stroke-width="2" />
    <line x1="140" y1="60" x2="60" y2="140" stroke="#E5E7EB" stroke-width="2" />

    <!-- Stredový bod: tmavý -->
    <circle cx="100" cy="100" r="5" fill="#18181B" />
  </svg>
</span>

</template>

<style scoped>
.rotate-slow {
  display: inline-block;
  animation: rotate360 20s linear infinite;
}

.rotate-slow svg {
  width: 50px;
  height: 50px;
  transform-origin: center;
  display: block;
  transition: 0.2s;
}

.rotate-slow svg:hover {
 transform: scale(1.4);
 transition: 0.2s;
}

@keyframes rotate360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
