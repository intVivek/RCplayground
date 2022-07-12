import beautify from "js-beautify";

const CodeBeautify = (code: string): string =>
  beautify(code, {
    indent_size: "2",
    indent_char: " ",
    max_preserve_newlines: "5",
    preserve_newlines: true,
    keep_array_indentation: true,
    break_chained_methods: false,
    indent_scripts: "normal",
    space_before_conditional: true,
    unescape_strings: false,
    jslint_happy: false,
    end_with_newline: false,
    wrap_line_length: "80",
    indent_inner_html: true,
    comma_first: false,
    e4x: false,
    brace_style: "expand",
  });

export default CodeBeautify;