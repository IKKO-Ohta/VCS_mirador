# -*- coding: utf-8 -*-
module ApplicationHelper

  def full_title(page_title = '')
    base_title = "VCS-Mirador alpha"
    if page_title.empty?
      base_title
    else
      page_title + " | " + base_title
    end
  end
end
