import { defineStore } from "pinia";
import { ref } from "vue";
import { BackgroundRenderer, loadImage, Easings, EffectType } from "midori-bg";

export const useMidoriStore = defineStore("midori", () => {
  const renderer = ref<BackgroundRenderer>();
  function initRenderer(canvas: HTMLCanvasElement) {
    if (renderer.value) return;
    renderer.value = new BackgroundRenderer(canvas);
  }
  async function setImage(imageUrl: string) {
    const image = await loadImage(imageUrl);
    renderer.value?.setBackground(image);
    renderer.value?.background.effects.set(EffectType.VignetteBlur, {
      size: 3,
      radius: 1.5,
      passes: 2,
    });
    renderer.value?.background.camera.sway(
      { x: 0.1, y: 0.05, z: 0.02, zr: 1 },
      {
        duration: 1.5,
        easing: Easings.Quadratic.InOut,
        loop: true,
      }
    );
    const particles = renderer.value?.background.particles;
    particles?.generate([
      {
        name: "small",
        amount: 60,
        maxSize: 5,
        maxOpacity: 1,
        minGradient: 0.75,
        maxGradient: 1.0,
        color: 0xffffff,
      },
      {
        name: "large",
        amount: 15,
        minSize: 50,
        maxSize: 100,
        maxOpacity: 0.1,
        minGradient: 1.0,
        maxGradient: 1.0,
        color: 0xffffff,
      },
    ]);
    particles?.sway(
      "large",
      { x: 0.025, y: 0.025 },
      { duration: 1.5, easing: Easings.Sinusoidal.InOut, loop: true }
    );
    particles?.sway(
      "small",
      { x: 0.025, y: 0.025 },
      { duration: 1.5, easing: Easings.Sinusoidal.InOut, loop: true }
    );
  }

  return {
    initRenderer,
    setImage,
  };
});
