"use strict";

Checks
  .register(
    "index.mappings.fields",
    [

      {
        name : "Use of `index_name` or `path`",
        color : "blue",
        check : function(field) {
          if ("path" in field) {
            return "Field `" + field._name
              + "` uses deprecated parameter `path`.";
          } else if ("index_name" in field) {
            return "Field " + field._name
              + " uses deprecated parameter `index_name`";
          }
        }
      },

      {
        name : "Boolean fields",
        color : "blue",
        check : function(field) {
          if ("type" in field && field.type === "boolean") {
            return "Boolean field `"
              + field._name
              + "` will return `1/0` instead of `T/F` in scripts, aggregations, or sort values."
          }
        }
      },

      {
        name : "Per-field postings format",
        color : "red",
        check : function(field) {
          if ("postings_format" in field) {
            return "Field `" + field._name
              + "` contains a `postings_format` which is no longer supported."
          }
        }
      },

    ]);
