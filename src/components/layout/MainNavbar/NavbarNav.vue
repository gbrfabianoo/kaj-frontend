<template>
  <d-navbar-nav class="border-left flex-row">
    <li class="nav-item border-right dropdown notifications">
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link text-nowrap px-3" v-d-toggle.user-actions>
        <img class="user-avatar rounded-circle mr-2" src="@/assets/images/avatars/0.jpg" alt="User Avatar"> <span class="d-none d-md-inline-block">Sierra Brooks</span>
      </a>
    </li>
  </d-navbar-nav>
</template>

<style>
  .nav-link:hover {
    cursor: pointer;
  }
</style>
