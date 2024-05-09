export interface ExcelRenderOptions {
	minColLength: number; // excel最少渲染多少列
	minRowLength: number; // excel最少渲染多少行
	widthOffset: number; // 在默认渲染的列表宽度上再加10px宽
	heightOffset: number; // 在默认渲染的列表高度上再加10px高
	beforeTransformData: (workbookData: any) => any; // 修改workbookData的函数类型定义
	transformData?: (workbookData: any) => any; // 修改workbookData的函数类型定义
}
