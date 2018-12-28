function generateTabs(tabIndex, tabTitles, tabUrls, topTitle) {
	document.write("<div align=\"center\"><font size=\"+3\">" + topTitle + "</font></div>");
	document.write("<br />");

	document.write("<center>");
	document.write("<table cellspacing=\"0\" width=\"100%\">");
	
	tabs = 5;
	document.write("<tr>");
	document.write("<td height=\"2\"></td>");
	for (i = 0; i < tabTitles.length; ++i) {
		document.write("<td style=\"background:#303030\"></td>");
		document.write("<td style=\"background:#303030\"></td>");
		document.write("<td style=\"background:#303030\"></td>");
		if (i + 1 < tabTitles.length) {
			document.write("<td height=\"2\"></td>");
		}
	}
	document.write("<td></td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td width=\"7%\"></td>");
	for (i = 0; i < tabTitles.length; ++i) {
		document.write("<td style=\"background:#303030\" width=\"2\"></td>");
		document.write("<td style=\"text-align:center\">");
		document.write("<a href=\"" + tabUrls[i] + "\" style=\"text-decoration:none;\">");
		document.write(tabTitles[i])
		document.write("</a>");
		document.write("</td>");
		document.write("<td style=\"background:#303030\" width=\"2\"></td>");
		if (i + 1 < tabTitles.length) {
			document.write("<td width=\"2%\"></td>");
		}
	}
	document.write("<td width=\"7%\"></td>");
	document.write("</tr>");
	
	document.write("<tr>");
	document.write("<td style=\"background:#303030\" height=\"2\"></td>");
	for (i = 0; i < tabTitles.length; ++i) {
		document.write("<td style=\"background:#303030\"></td>");
		if (i == tabIndex) {
			document.write("<td></td>");
		} else {
			document.write("<td style=\"background:#303030\"></td>");
		}
		document.write("<td style=\"background:#303030\"></td>");
		if (i + 1 < tabTitles.length) {
			document.write("<td style=\"background:#303030\"></td>");
		}
	}
	document.write("<td style=\"background:#303030\"></td>");
	document.write("</tr>");
	
	document.write("</table>");
	document.write("</center>");
}
