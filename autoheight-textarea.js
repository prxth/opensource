window.addEventListener("DOMContentLoaded",function(){

	const targetA = document.querySelectorAll(".la_eTrigger_s688923984632");

	if( targetA ){
		/**
		 * テキストエリアのサイズを、内部サイズに合わせて自動で変更する
		 */
		Array.from(targetA, e=>{
			e.addEventListener("input",()=>{
				const textarea = e;
				// console.log(
				// 	"textarea.scrollHeight = ", textarea.scrollHeight, "\n",
				// 	"textarea.offsetHeight = ", textarea.offsetHeight
				// );
				// if( textarea.scrollHeight > textarea.offsetHeight ){
					textarea.style.height = "0";
					textarea.style.height = textarea.scrollHeight+'px';
				// }
			},false);
		});
	}

},{
	onec: true,
});
