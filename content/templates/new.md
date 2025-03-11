---
title: <% tp.file.title %>
subtitle: 
author: Mishamol
author_avatar: /images/authors/mishamol_linen.png
date: <%* tR += tp.date.now("YYYY-MM-DDTHH:mm:ssZ") %>
draft: true
---

<%*
	try {
		await tp.file.rename("index");
	} catch (error) {
		console.error("Error renaming file:", error);
		// Optionally, you can add a message here to notify the user
		console.log("File rename failed. Please check the console for details.");
	}
%>
