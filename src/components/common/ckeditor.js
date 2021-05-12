import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const CkEditor = ({ data = "", setData }) => (
  <CKEditor
    editor={ClassicEditor}
    data={data}
    onBlur={(_, editor) => setData(editor.getData())}
  />
);
export default CkEditor;
