function jade_escape(e) {
    var a = "" + e, t = jade_match_html.exec(a);
    if (!t)return e;
    var r, c, n, s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
            case 34:
                n = "&quot;";
                break;
            case 38:
                n = "&amp;";
                break;
            case 60:
                n = "&lt;";
                break;
            case 62:
                n = "&gt;";
                break;
            default:
                continue
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n
    }
    return c !== r ? s + a.substring(c, r) : s
}
var jade_match_html = /["&<>]/;
function jade_rethrow(e, n, r, t) {
    if (!(e instanceof Error))throw e;
    if (!("undefined" == typeof window && n || t))throw e.message += " on line " + r, e;
    try {
        t = t || require("fs").readFileSync(n, "utf8")
    } catch (a) {
        jade_rethrow(e, null, r)
    }
    var i = 3, o = t.split("\n"), h = Math.max(r - i, 0), s = Math.min(o.length, r + i), i = o.slice(h, s).map(function (e, n) {
        var t = n + h + 1;
        return (t == r ? "  > " : "    ") + t + "| " + e
    }).join("\n");
    throw e.path = n, e.message = (n || "Jade") + ":" + r + "\n" + i + "\n\n" + e.message, e
}
function fancyTemplateFun(locals) {
    var jade_html = "", jade_mixins = {}, jade_interp;
    var jade_debug_filename, jade_debug_line;
    try {
        ;
        var locals_for_with = (locals || {});
        (function (author) {
            ;
            jade_debug_line = 1;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + "\u003C!--Created by Mohammed Suboor on 30-01-2017.--\u003E";
            ;
            jade_debug_line = 2;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + "\u003Ch1\u003E";
            ;
            jade_debug_line = 2;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + "This is a Pug template\u003C\u002Fh1\u003E";
            ;
            jade_debug_line = 3;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + "\u003Ch2\u003E";
            ;
            jade_debug_line = 3;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + "By ";
            ;
            jade_debug_line = 3;
            jade_debug_filename = "..\u002F..\u002Fviews\u002FpugFileTest.pug";
            jade_html = jade_html + (jade_escape(null == (jade_interp = author) ? "" : jade_interp)) + "\u003C\u002Fh2\u003E";
        }.call(this, "author" in locals_for_with ? locals_for_with.author : typeof author !== "undefined" ? author : undefined));
    } catch (err) {
        jade_rethrow(err, jade_debug_filename, jade_debug_line);
    }
    ;
    return jade_html;
}