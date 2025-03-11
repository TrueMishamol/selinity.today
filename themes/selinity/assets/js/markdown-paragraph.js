
/// Move all <img> elements outside the <p> element inside .markdown

function moveImagesAndRemoveEmptyParagraphs() {
	const markdownDivs = document.querySelectorAll('.markdown');

	markdownDivs.forEach(markdownDiv => {
		if (!markdownDiv) return;

		const paragraphs = markdownDiv.querySelectorAll('p');

		paragraphs.forEach(paragraph => {
			const images = paragraph.querySelectorAll('img');

			images.forEach(image => {
				// Insert the image before the paragraph
				paragraph.parentNode.insertBefore(image, paragraph);
			});

			// Check if the paragraph is now empty (no child nodes)
			if (!paragraph.hasChildNodes()) {
				// Remove the empty paragraph
				paragraph.parentNode.removeChild(paragraph);
			} else {
				// Check if the paragraph contains only whitespace
				const textContent = paragraph.textContent.trim();
				if (textContent === '') {
					paragraph.parentNode.removeChild(paragraph);
				}
			}
		});
	});
}

// Run the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', moveImagesAndRemoveEmptyParagraphs);





/// Group <p>, <ol>, <ul>, <h3> elements within a .markdown container into .markdown_paragraph

function groupMarkdownElements() {
	const markdownDivs = document.querySelectorAll('.markdown');

	markdownDivs.forEach(markdownDiv => {
		if (!markdownDiv) return; // Skip if the .markdown div doesn't exist

		const children = Array.from(markdownDiv.children); // Get direct children as an array
		let group = [];
		let i = 0;

		while (i < children.length) {
			const el = children[i];

			if (el.matches('p, ol, ul, h3')) {
				// Start or continue a group
				group.push(el);
				i++;
			} else {
				// Process the group if it exists and reset
				if (group.length > 0) {
					wrapGroup(markdownDiv, group);
					group = [];
				}
				i++; // Move to the next element
			}
		}

		// Process any remaining group at the end
		if (group.length > 0) {
			wrapGroup(markdownDiv, group);
		}
	});

	function wrapGroup(markdownDiv, group) {
		const wrapper = document.createElement('div');
		wrapper.classList.add('markdown_paragraph');

		// Insert the wrapper before the first element in the group
		markdownDiv.insertBefore(wrapper, group[0]);

		// Move each element from the group into the wrapper
		group.forEach(el => {
			wrapper.appendChild(el);
		});
	}
}

// Run the function after the DOM is loaded
document.addEventListener('DOMContentLoaded', groupMarkdownElements);
