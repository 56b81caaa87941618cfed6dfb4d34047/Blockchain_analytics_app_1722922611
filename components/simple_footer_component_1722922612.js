/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722922612", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-30 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg p-6">
            <div id="footer-container" class="max-w-screen-xl mx-auto">
                <hr id="footer-divider" class="my-6 border-pink-300 opacity-30">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-9 mr-3 filter invert" alt="Landwind Logo" />
                            BlockChain Analytics
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
                        Stay ahead of the curve with our cutting-edge blockchain data analysis tools. Gain valuable insights and make informed decisions for your business or investments.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
