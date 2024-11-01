import { defineComponent, ref } from "vue";

const JsxComponent = defineComponent({
	name: "JsxComponent",
	setup() {
		const value = ref(0);
		const value2 = ref("");
		return () => (
			<div>
				<ul>
					{Array(5)
						.fill(null)
						.map((item, index) => (
							<li key={index}>{index + 1}</li>
						))}
					<li>11</li>
				</ul>
				<el-button type="primary" onClick={() => value.value++}>
					{value.value}
				</el-button>
				{value.value > 5 ? <div>大于五了</div> : <div>小于五</div>}
				{value.value > 5 && <div>大于五了-----</div>}
				{value2.value}
				<el-input v-model={value2.value} placeholder="请输入内容" />
			</div>
		);
	}
});

export default JsxComponent;
