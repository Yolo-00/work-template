export interface RenderOptions {
	className?: string; // 默认和文档样式类的类名/前缀
	inWrapper?: boolean; // 启用在文档内容周围的包装器渲染
	ignoreWidth?: boolean; // 禁用页面宽度渲染
	ignoreHeight?: boolean; // 禁用页面高度渲染
	ignoreFonts?: boolean; // 禁用字体渲染
	breakPages?: boolean; // 启用分页在页面断点上
	ignoreLastRenderedPageBreak?: boolean; // 禁用在lastRenderedPageBreak元素上的分页
	experimental?: boolean; // 启用实验性功能（制表符计算）
	trimXmlDeclaration?: boolean; // 如果为true，将从解析之前的xml文档中移除xml声明
	useBase64URL?: boolean; // 如果为true，图像、字体等将转换为base 64 URL，否则使用URL.createObjectURL
	useMathMLPolyfill?: boolean; // 包括MathML填充，适用于chrome、edge等
	showChanges?: boolean; // 启用文档更改的实验性渲染（插入/删除）
	debug?: boolean; // 启用额外的日志记录
}
