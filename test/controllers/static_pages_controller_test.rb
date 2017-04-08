require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest

  test "should get home" do
    get root_path
    assert_response :success
    assert_select "title", "VCS-Mirador alpha"
  end

  test "should get help" do
    get help_path
    assert_response :success
    assert_select "title", "Help | VCS-Mirador alpha"
  end

  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title", "About | VCS-Mirador alpha"
  end

  test "should get contact" do
    get contact_path
    assert_response :success
    assert_select "title", "Contact | VCS-Mirador alpha"
  end
end
