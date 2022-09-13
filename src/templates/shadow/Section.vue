<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div>
    <div
      class="title--wrapper"
      relative
    >
      <div
        text-white
        class="title"
        leading-8
        px-4
        rounded-tl-2
        inline-block
        bg-007b86
        relative
      >
        {{ title }}
      </div>
    </div>
    <div
      leading-8
      pt-4
    >
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.title {
  &::after {
    position: absolute;
    top: 0;
    left: 100%;
    content: ' ';
    bottom: 0;
    width: 74px;
    z-index: 2;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAhCAMAAABJPc3aAAABpFBMVEUAAAAAAAAAgIAAZmYAmZkAgIAAkpIAgIAAcY4Ai4sAgIAAdokAiIgAgI8AeIcAgIAAgI4AeYYAeYYAgIsAgIoAhIQAgIkAe4wAgIcAfIMAfIMAeIcAfIkAeYYAgIYAfYgAeoUAfYgAgIUAfYgAeoUAgIUAfYcAgIUAgIoAfYcAe4QAe4kAgIkAe4QAeYYAfYYAe4gAe4QAfYYAe4QAe4gAfIMAfoUAfIcAeoUAfIcAeoUAfIcAeoUAeYYAeYYAfIYAeYMAeYYAe4QAe4QAe4cAfYUAeYQAe4QAfIMAfIYAfIMAe4UAeYMAfIYAe4QAeYMAeYYAe4QAe4QAeoMAfIUAe4QAeoUAe4QAeoMAeoMAfIUAeoUAe4QAe4QAe4YAe4QAe4QAe4QAfIUAe4QAe4QAeoUAe4QAe4YAeoUAe4YAe4UAeoUAfIUAe4QAe4YAe4YAe4UAe4QAe4UAe4YAeoYAe4UAe4UAe4YAe4UAeoYAfIYAe4YAe4YAe4UAe4cAe4YAeoYAe4YAe4UAe4UAe4UAeoYAe4YAe4YAe4YAe4YAe4cAe4bEwSQuAAAAi3RSTlMAAQQFBQYHCAkLDA0PEBESEhMVFhgbHB8gISMkJyoqKywtLi8wMDEyMjM0NDQ4OTk6PD0+PkBBQkVGR0hJTE5QVFRVWVlaXV1hYWVmZ2doaWlqbG1tbm9wcXNze3x+foGFh4iJi46Rk5SanZ+hoqSqrrW8v8jJy9HT3eXm6Ovr7O7u8fX3+Pn6+/3+VHugMgAAAYZJREFUSMeN1dVWQlEUheEDFood2IqFYjd2YHcLdneDhdgYB+dLe4l73rjWA3zj33vs0KC/+7yHbldoFmZGnA57aGyFORazJhgAAF4vllzKTHWW2/9OQbJBSAH+XdVyjTYqlj3PJKWgn5C10KZatngpheAZWYvtqlWWIKXwvcddTdQVLaXwuEzWeKVq5RukFK6IcnWrlD1VTH2sEDVbpVLFRikFL2c5KcsipvQN3vla2vkIKYUbzuqnrAwxFdzmw1WvUqUmKYV7zhqirGwx9bPPVjNZMVIKPqaGicoRUzhiq4WsWDH14ObnhqhcMYVzzuogK0lMvfCtnqxQqQKDlMIlZ3VRVoqYCvx3q4uMUgrXnNVHWeli6ueYrVay4qQUApu8xDpaYqSUwvMqWRO0XVajlIJ/jayxavoXw6QUnra4i54ba5SUwucpWXP0L5YkSingbp2wwRoVywqXUvjy0GGd71V332YxCilAvz2gf2PAoWKZZiEF4M2zo2rTPQ3q7U4zaZqm/QKRAmTw2tNDqwAAAABJRU5ErkJggg==)
      no-repeat;
  }
  &--wrapper {
    &::after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(to right, #007b86, transparent);
    }
  }
}
</style>
