module.exports = {
 
	darkMode: "class",
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: 'media',
  theme: {
    extend: {
    	colors: {
    		"blackish": "var(--blackish)",
  			"mycyan": "var(--mycyan)",
  			
  			primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'cyan-heading': 'var(--cyan-heading)',


    	},

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}




