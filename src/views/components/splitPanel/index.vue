<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<template>
	<div>
		<splitpanes class="default-theme h-100!">
			<pane class="pane-item" min-size="10" v-for="i in 5" :key="i">
				{{ i }}
			</pane>
		</splitpanes>

		<splitpanes class="default-theme h-100! mt-5">
			<pane class="pane-item" min-size="20"> 1 </pane>
			<pane>
				<splitpanes horizontal>
					<pane min-size="20" class="pane-item">2</pane>
					<pane min-size="20" class="pane-item">3</pane>
					<pane min-size="20" class="pane-item">4</pane>
				</splitpanes>
			</pane>
			<pane class="pane-item" min-size="20"> 5 </pane>
		</splitpanes>
	</div>
</template>

<style lang="scss" scoped>
.pane-item {
	@apply flex items-center justify-center;
}
</style>
