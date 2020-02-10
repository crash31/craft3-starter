let init = () => {
	let lazyImages = [...document.querySelectorAll("img.lazy")];
	let active = false;

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					if (lazyImage.dataset.srcset) {
						lazyImage.srcset = lazyImage.dataset.srcset;
					}
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(lazyImage => {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		const lazyLoad = () => {
			if (active === false) {
				active = true;

				setTimeout(() => {
					lazyImages.forEach(lazyImage => {
						if (
							lazyImage.getBoundingClientRect().top <= window.innerHeight &&
							lazyImage.getBoundingClientRect().bottom >= 0 &&
							getComputedStyle(lazyImage).display !== "none"
						) {
							lazyImage.src = lazyImage.dataset.src;
							lazyImage.srcset = lazyImage.dataset.srcset;
							lazyImage.classList.remove("lazy");

							lazyImages = lazyImages.filter(image => {
								return image !== lazyImage;
							});

							if (lazyImages.length === 0) {
								document.removeEventListener("scroll", lazyLoad);
								window.removeEventListener("resize", lazyLoad);
								window.removeEventListener("orientationchange", lazyLoad);
							}
						}
					});

					active = false;
				}, 100);
			}
		};

		document.addEventListener("scroll", lazyLoad);
		window.addEventListener("resize", lazyLoad);
		window.addEventListener("orientationchange", lazyLoad);
	}
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
