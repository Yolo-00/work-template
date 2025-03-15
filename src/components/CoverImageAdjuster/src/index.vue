<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue";

interface Props {
	src: string;
	width?: number;
	height?: number;
	draggable?: boolean;
	initialPosition?: {
		x: number;
		y: number;
	};
}

const props = withDefaults(defineProps<Props>(), {
	width: 200,
	height: 200,
	draggable: true,
	initialPosition: undefined
});

const emit = defineEmits<{
	positionChange: [position: { x: number; y: number }];
}>();

const containerRef = ref<HTMLDivElement>();
const imgRef = ref<HTMLImageElement>();
const isDragging = ref(false);
const position = ref({ x: 0, y: 0 });
const startPos = ref({ x: 0, y: 0 });
const imageLoaded = ref(false);
const imageStyle = ref({
	height: "100%",
	width: "auto"
});

const initPosition = () => {
	if (props.initialPosition) {
		position.value = props.initialPosition;
		return;
	}

	position.value = {
		x: 0,
		y: 0
	};

	emit("positionChange", position.value);
};

const updatePosition = (newX: number, newY: number) => {
	const container = containerRef.value;
	if (container && imgRef.value) {
		const img = imgRef.value;
		const maxX = 0;
		const minX = props.width - img.offsetWidth;
		const maxY = 0;
		const minY = props.height - img.offsetHeight;

		const newPosition = {
			x: Math.min(maxX, Math.max(minX, newX)),
			y: Math.min(maxY, Math.max(minY, newY))
		};

		position.value = newPosition;
		emit("positionChange", newPosition);
	}
};

const handleMouseMove = (e: MouseEvent) => {
	if (!isDragging.value || !imgRef.value) return;

	const newX = e.clientX - startPos.value.x;
	const newY = e.clientY - startPos.value.y;

	updatePosition(newX, newY);
};

const handleTouchMove = (e: TouchEvent) => {
	if (!isDragging.value || !imgRef.value) return;
	e.preventDefault();

	const touch = e.touches[0];
	const newX = touch.clientX - startPos.value.x;
	const newY = touch.clientY - startPos.value.y;

	updatePosition(newX, newY);
};

const handleMouseUp = () => {
	isDragging.value = false;
	document.removeEventListener("mousemove", handleMouseMove);
	document.removeEventListener("mouseup", handleMouseUp);
};

const handleTouchEnd = () => {
	isDragging.value = false;
	document.removeEventListener("touchmove", handleTouchMove);
	document.removeEventListener("touchend", handleTouchEnd);
};

const handleMouseDown = (e: MouseEvent) => {
	if (!props.draggable) return;

	isDragging.value = true;
	startPos.value = {
		x: e.clientX - position.value.x,
		y: e.clientY - position.value.y
	};
	document.addEventListener("mousemove", handleMouseMove);
	document.addEventListener("mouseup", handleMouseUp);
};

const handleTouchStart = (e: TouchEvent) => {
	if (!props.draggable) return;
	e.preventDefault();

	const touch = e.touches[0];
	isDragging.value = true;
	startPos.value = {
		x: touch.clientX - position.value.x,
		y: touch.clientY - position.value.y
	};
	document.addEventListener("touchmove", handleTouchMove);
	document.addEventListener("touchend", handleTouchEnd);
};

const handleImageLoad = () => {
	const img = imgRef.value;
	if (!img) return;

	const imgRatio = img.naturalWidth / img.naturalHeight;
	const containerRatio = props.width / props.height;

	if (imgRatio > containerRatio) {
		imageStyle.value = {
			height: "100%",
			width: "auto"
		};
	} else {
		imageStyle.value = {
			width: "100%",
			height: "auto"
		};
	}

	imageLoaded.value = true;
	initPosition();
};

watch(
	() => props.initialPosition,
	newVal => {
		if (newVal && imageLoaded.value) {
			position.value = newVal;
			emit("positionChange", newVal);
		}
	},
	{ deep: true }
);

onUnmounted(() => {
	document.removeEventListener("mousemove", handleMouseMove);
	document.removeEventListener("mouseup", handleMouseUp);
	document.removeEventListener("touchmove", handleTouchMove);
	document.removeEventListener("touchend", handleTouchEnd);
});
</script>

<template>
	<div
		ref="containerRef"
		class="draggable-container"
		:style="{
			width: `${width}px`,
			height: `${height}px`
		}"
	>
		<img
			ref="imgRef"
			:src="src"
			@load="handleImageLoad"
			@mousedown.prevent="handleMouseDown"
			@touchstart.prevent="handleTouchStart"
			:style="{
				...imageStyle,
				transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
				opacity: imageLoaded ? 1 : 0,
				cursor: draggable ? 'move' : 'default',
				'will-change': isDragging ? 'transform' : 'auto'
			}"
		/>
	</div>
</template>

<style lang="scss" scoped>
.draggable-container {
	position: relative;
	overflow: hidden;
	-webkit-touch-callout: none;

	img {
		position: absolute;
		user-select: none;
		-webkit-user-select: none;
		transition: opacity 0.3s;
		backface-visibility: hidden;
	}
}
</style>
